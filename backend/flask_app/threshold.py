from __future__ import division
import speed_perf_index as threshold
import max_likelihood as maxlikehihood
import congestion_avg as congestion
import os
import numpy as np
import pandas as pd
import boto3
import sys
import math
from StringIO import StringIO # Python 2.x

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

# # removing redundant rows from the frame
data = data[data['Congestion'] != 0.0]
data = data.reset_index(drop=True)

f1 = threshold.spi(data)
f2 = maxlikehihood.likelihood(data)
f3 = congestion.average(data)

final=(f1+f2+f3)/3
print final



