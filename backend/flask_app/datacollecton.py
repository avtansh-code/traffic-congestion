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

place = ['Hauz Khas', 'Model Town', 'Civil Lines', 'Punjabi Bagh', 'Najafgarh', 'Saraswati Vihar', 'Mukarba Chowk', 'Seelampur', 'Gurugram', 'Noida']

latitude = ['28.5494489', '28.7158727', '28.6814284', '28.6619753', '28.6090126', '28.6964967', '28.7372', '28.6640177', '28.4595', '28.5355']

longitude = ['77.2001368', '77.1910738', '77.2226866', '77.1241557', '76.9854526', '77.1250482', '77.1603', '77.2711667', '77.0266', '77.3910']

while True:
	dfdata = gd.getData()
	for x in range(10):
		now = datetime.datetime.now()
		currdate = now.strftime("%Y-%m-%d")
		currtime = now.strftime("%H:%M:%S")
		weekday = calendar.day_name[now.weekday()] 
		url = "https://api.tomtom.com/traffic/services/4/flowSegmentData/absolute/10/json?key=aek0aVjtpxuq4D5qUgOAq0PDpN9V9lwt&point="+latitude[x]+","+longitude[x]
		response = requests.get(url)
		data = response.json()
		currSpeed = data['flowSegmentData']['currentSpeed']
		normSpeed = data['flowSegmentData']['freeFlowSpeed']
		congestion = (1-(currSpeed/normSpeed))*100
		data = pd.DataFrame([[place[x], currSpeed, normSpeed, currdate, now.hour, congestion, weekday]], columns = ['Location','CurrSpeed', 'NormSpeed', 'Date', 'Hour', 'Congestion', 'Weekday'])
		print "Data inserted for "+place[x]+" on "+currdate+" at "+currtime
		dfdata = dfdata.append(data)
		dfdata = dfdata.reset_index(drop=True)
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

	time.sleep(900)

db.close()