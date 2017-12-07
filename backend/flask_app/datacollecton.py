import os
import MySQLdb
import datetime
import requests
import pandas as pd
import time
import boto3

db = MySQLdb.connect(host="localhost",  # your host 
                     user="root",       # username
                     passwd="root",     # password
                     db="traffic")

cur = db.cursor()

place = ['Hauz Khas', 'Model Town', 'Civil Lines', 'Punjabi Bagh', 'Najafgarh', 'Saraswati Vihar', 'Mukarba Chowk', 'Seelampur', 'Gurugram', 'Noida']

latitude = ['28.5494489', '28.7158727', '28.6814284', '28.6619753', '28.6090126', '28.6964967', '28.7372', '28.6640177', '28.4595', '28.5355']

longitude = ['77.2001368', '77.1910738', '77.2226866', '77.1241557', '76.9854526', '77.1250482', '77.1603', '77.2711667', '77.0266', '77.3910']

while True:
	for x in range(10):
		try:
			url = "https://api.tomtom.com/traffic/services/4/flowSegmentData/absolute/10/json?key=aek0aVjtpxuq4D5qUgOAq0PDpN9V9lwt&point="+latitude[x]+","+longitude[x]
			response = requests.get(url)
			data = response.json()
			now = datetime.datetime.now()
			currdate = now.strftime("%Y-%m-%d")
			currtime = now.strftime("%H:%M:%S")
			currSpeed = data['flowSegmentData']['currentSpeed']
			normSpeed = data['flowSegmentData']['freeFlowSpeed']
			query = 'insert into traffic_data (location, currSpeed, normSpeed, date, time) values(%s, %s, %s, %s, %s)'
			print query
			data = (place[x], currSpeed, normSpeed, currdate, currtime)
			cur.execute(query, data)
		  	print "Data inserted for "+place[x]+" on "+currdate+" at "+currtime
			db.commit()
		except:
			print "Error"
			db.rollback()
	query = "SELECT location,currSpeed, normSpeed, date, HOUR(time), cong_percent FROM traffic_data;"
	cur.execute(query)

	res = cur.fetchall()

	df = pd.DataFrame(data=list(res))

	df.columns = ['Location','CurrSpeed', 'NormSpeed', 'Date', 'Hour', 'Congestion']

	print len(df)

	df.to_csv('output.csv')

	print('CSV File Created Succesfully')
	data = open('output.csv')

	# get your credentials from environment variables
	aws_id = os.environ['AWS_ID']
	aws_secret = os.environ['AWS_SECRET']

	client = boto3.client('s3', aws_access_key_id=aws_id, aws_secret_access_key=aws_secret)

	bucket_name = 'traffic-predictions'

	object_key = 'output.csv'
	client.put_object(Key=object_key, Body=data, Bucket=bucket_name)
	print 'File Upload Successful'

	time.sleep(900)

db.close()
