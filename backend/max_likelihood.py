from __future__ import division
import os
import numpy as np
import pandas as pd
import boto3
import sys
import math

if sys.version_info[0] < 3: 
    from StringIO import StringIO # Python 2.x
else:
    from io import StringIO # Python 3.x

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
print 'File Read Successfully from S3'

#Removing redundant values
data = data[data['Congestion'] != 0.0]
data = data.reset_index(drop=True)

congestion_avg = data['Congestion'].mean()

cong_var = data['Congestion']
cong_var = cong_var - congestion_avg
cong_var = cong_var * cong_var
val = cong_var.mean()


prob=data['Congestion']
part1=prob-cong_var
part1=part1*part1
part1=part1/(2*cong_var*cong_var)
part1=(-1)*part1

part2=[]
for x in range(len(part1)):
    z=(math.exp(part1[x]))
    part2.append((0.3989*z)/val)

max_threshold= data.get_value(part2.index(max(part2)),'Congestion')

print max_threshold

