import MySQLdb
import datetime
import requests
import time

db = MySQLdb.connect(host="localhost",  # your host 
                     user="root",       # username
                     passwd="root",     # password
                     db="traffic")

cur = db.cursor()

place = ['HauzKhas', 'ModelTown', 'CivilLines', 'PunjabiBagh', 'Najafgarh', 'SaraswatiVihar', 'MukarbaChowk', 'Seelampur', 'Gurugram', 'Noida']

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
			query = 'insert into '+place[x]+' (currSpeed, normSpeed, date, time) values(%s, %s, %s, %s)'
			print query
			data = (currSpeed, normSpeed, currdate, currtime)
			cur.execute(query, data)
		  	print "Data inserted for "+place[x]+" on "+currdate+" at "+currtime
			db.commit()
		except:
			print "Error"
			db.rollback()
	time.sleep(1800)

db.close()
