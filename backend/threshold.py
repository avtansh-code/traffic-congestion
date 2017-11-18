from __future__ import division
import numpy as np
import pandas as pd
import boto3
import sys

if sys.version_info[0] < 3: 
    from StringIO import StringIO # Python 2.x
else:
    from io import StringIO # Python 3.x

aws_id = 'AKIAJWP4IYG3ZOSOGCZQ'
aws_secret = '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'

client = boto3.client('s3', aws_access_key_id=aws_id, aws_secret_access_key=aws_secret)

bucket_name = 'traffic-congestion'

object_key = 'output.csv'
csv_obj = client.get_object(Bucket=bucket_name, Key=object_key)
body = csv_obj['Body']
csv_string = body.read().decode('utf-8')

data = pd.read_csv(StringIO(csv_string))

print 'File Read from S3 successfully'

sum_of_curr_speed=data['CurrSpeed'].sum()

sum_of_norm_speed=data['NormSpeed'].sum()
speed_performance_index = 0.00
speed_performance_index=1-(sum_of_curr_speed/sum_of_norm_speed)

print(speed_performance_index)