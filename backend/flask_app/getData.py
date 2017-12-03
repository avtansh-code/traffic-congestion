import os
import pandas as pd
import boto3
import sys
import math
from StringIO import StringIO

def getData():
    # get your credentials from environment variables
    aws_id = os.environ['AWS_ID']
    aws_secret = os.environ['AWS_SECRET']

    client = boto3.client('s3', aws_access_key_id=aws_id, aws_secret_access_key=aws_secret)

    bucket_name = 'traffic-predictions'

    object_key = 'output.csv'
    csv_obj = client.get_object(Bucket=bucket_name, Key=object_key)
    body = csv_obj['Body']
    csv_string = body.read().decode('utf-8')

    data = pd.read_csv(StringIO(csv_string))

    data = data[['Location', 'CurrSpeed', 'NormSpeed', 'Date', 'Hour', 'Congestion']]

    # # removing redundant rows from the frame
    data = data[data['Congestion'] != 0.0]
    data = data.reset_index(drop=True)

    return data