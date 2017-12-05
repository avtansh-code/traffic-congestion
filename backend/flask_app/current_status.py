from __future__ import division
import datetime
import clustering as cl
import threshold
import requests
import pandas as pd
import time
import json

place = ['Hauz Khas', 'Model Town', 'Civil Lines', 'Punjabi Bagh', 'Najafgarh', 'Saraswati Vihar', 'Mukarba Chowk', 'Seelampur', 'Gurugram', 'Noida']
latitude = ['28.5494489', '28.7158727', '28.6814284', '28.6619753', '28.6090126', '28.6964967', '28.7372', '28.6640177', '28.4595', '28.5355']
longitude = ['77.2001368', '77.1910738', '77.2226866', '77.1241557', '76.9854526', '77.1250482', '77.1603', '77.2711667', '77.0266', '77.3910']


def getData(data, location):
    x = place.index(location)
    lat = latitude[x]
    lon = longitude[x]
    print x
    url = "https://api.tomtom.com/traffic/services/4/flowSegmentData/absolute/10/json?key=aek0aVjtpxuq4D5qUgOAq0PDpN9V9lwt&point="+latitude[x]+","+longitude[x]
    response = requests.get(url)
    res = response.json()
    now = datetime.datetime.now()
    currdate = now.strftime("%Y-%m-%d")
    currtime = now.strftime("%H:%M:%S")
    currSpeed = res['flowSegmentData']['currentSpeed']
    normSpeed = res['flowSegmentData']['freeFlowSpeed']
    congestion = ((normSpeed - currSpeed)/normSpeed)*100
    th = threshold.calc_threshold(data)
    print th
    maxrow =  data.loc[data['Congestion'].idxmax()]
    maxcong = maxrow['Congestion']
    print maxcong
    point1 = th-(maxcong*0.1)
    point2 = th+(maxcong*0.1)
    if congestion < point1:
        congType = 'Low'
    elif congestion > point2:
        congType = 'High'
    else:
        congType = 'Moderate'
    jstr = {"currSpeed": currSpeed, "normSpeed": normSpeed, "congestion": congestion, "congType": congType}
    json_data = json.dumps(jstr)
    return json_data