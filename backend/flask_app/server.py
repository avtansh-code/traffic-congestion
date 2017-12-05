"""Entry point for the server application."""
from __future__ import division
import MySQLdb
from datetime import date, datetime, timedelta
import hashlib
import json
import logging
import traceback
from flask import Response, request, jsonify, current_app
from gevent.wsgi import WSGIServer
from flask_jwt_simple import (
    JWTManager, jwt_required, create_jwt, get_jwt_identity, get_jwt
)
import os
import pandas as pd
import boto3
import sys
import math
from .http_codes import Status
from .factory import create_app, create_user
from StringIO import StringIO
import getData
import threshold
import typeBased as tb

logger = logging.getLogger(__name__)
app = create_app()
jwt = JWTManager(app)

trafficData = pd.DataFrame()

@app.before_first_request
def init():
    """Initialize the application with defaults."""
    create_user(app)


@jwt.jwt_data_loader
def add_claims_to_access_token(identity):
    """Explicitly set identity and claims for jwt."""
    if identity == 'admin':
        roles = 'admin'
    else:
        roles = 'peasant'

    now = datetime.utcnow()
    return {
        'exp': now + current_app.config['JWT_EXPIRES'],
        'iat': now,
        'nbf': now,
        'sub': identity,
        'roles': roles
    }


@app.route("/api/logout", methods=['GET'])
@jwt_required
def logout():
    """Logout the currently logged in user."""
    # TODO: handle this logout properly, very weird implementation.
    identity = get_jwt_identity()
    if not identity:
        return jsonify({"msg": "Token invalid"}), Status.HTTP_BAD_UNAUTHORIZED
    logger.info('Logged out user !!')
    return 'logged out successfully', Status.HTTP_OK_BASIC


@app.route('/api/login', methods=['POST'])
def login():
    """View function for login view."""
    logger.info('Logging in')

    params = request.get_json()
    username = params.get('username', None)
    password = params.get('password', None)

    if not username:
        return jsonify({"msg": "Missing username parameter"}), Status.HTTP_BAD_REQUEST
    if not password:
        return jsonify({"msg": "Missing password parameter"}), Status.HTTP_BAD_REQUEST
    try:
        db = MySQLdb.connect(host="localhost",  # your host 
                            user="root",       # username
                            passwd="root",     # password
                            db="traffic")
        query = "select password from users where username='"+username+"'"
        cur = db.cursor()
        cur.execute(query)
        count = cur.rowcount
        if count == 0:
            logger.info("Login Failed Due to missing username")
            return jsonify({"msg": "Incorrect Username"}), Status.HTTP_BAD_UNAUTHORIZED
        data = cur.fetchall()
        if password != data[0][0]:
            logger.info("Login Failed Due to incorrect password")
            return jsonify({"msg": "Incorrect password"}), Status.HTTP_BAD_UNAUTHORIZED

        ret = {'jwt': create_jwt(identity=username), 'exp': datetime.utcnow() + current_app.config['JWT_EXPIRES']}
        logger.info('Getting data from S3 bucket')
        global trafficData
        trafficData = getData.getData()
        logger.info("Data retrieval successful")
        return jsonify(ret), Status.HTTP_OK_BASIC
    except:
        logger.info('Failed')
        return jsonify({"msg": "Server Error"}), Status.HTTP_BAD_REQUEST


@app.route('/api/getLocationOverview', methods=['POST'])
@jwt_required
def post_location_data():
    logger.info('Getting data')
    params = request.get_json()
    location = params.get('location', None)
    dataType = params.get('type',None)
    global trafficData
    logger.info(location)
    logger.info(dataType)

    try:
        totalData = trafficData[trafficData['Location'] == location]
        data = tb.dataBasedOnType(totalData, dataType)
        location_threshold = threshold.calc_threshold(data)
        data['Threshold'] = location_threshold
        data = data[['Hour','NormSpeed','CurrSpeed','Congestion','Threshold']].groupby(data['Hour'])
        data = data.mean()
        json_string = data.to_json(orient='index')
        return Response(json_string,
                    status=Status.HTTP_OK_BASIC,
                    mimetype='application/json')
    except:
        logger.info('Failed')
        return jsonify({"msg": "Row Not Fetched"}), Status.HTTP_BAD_REQUEST


def main():
    """Main entry point of the app."""
    try:
        port = 8080
        ip = '0.0.0.0'
        http_server = WSGIServer((ip, port),
                                 app,
                                 log=logging,
                                 error_log=logging)
        print("Server started at: {0}:{1}".format(ip, port))
        http_server.serve_forever()
    except Exception as exc:
        logger.error(exc.message)
        logger.exception(traceback.format_exc())
    finally:
        # Do something here
        pass
