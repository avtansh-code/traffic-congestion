from __future__ import division
import time
import json
import MySQLdb
import datetime
import requests
import pandas as pd
import urllib2
import getData as gd
import calendar

print "Hello"
dfdata = gd.getData()
print dfdata
dfdata['Weekday'] = 'Sunday'
for index, row in dfdata.iterrows():
    print index
    thatdate = datetime.datetime.strptime(row['Date'],"%Y-%m-%d")
    dfdata.loc[index, 'Weekday'] = calendar.day_name[thatdate.weekday()] 
print dfdata

print len(dfdata)

dfdata.to_csv('output.csv')

print('CSV File Created Succesfully')
my_file = open("output.csv", "rb")
my_bytes = my_file.read()
my_url = "https://firebasestorage.googleapis.com/v0/b/traffic-predictor-233145.appspot.com/o/output.csv"
my_headers = {"Content-Type": "text/plain"}

my_request = urllib2.Request(my_url, data=my_bytes, headers=my_headers)

try:
    loader = urllib2.urlopen(my_request)
except urllib2.URLError as e:
    message = json.loads(e.read())
    print(message["error"]["message"])
else:
    print("File Successfully Uploaded")
