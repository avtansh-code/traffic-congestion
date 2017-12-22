import pandas as pd
import sys
import math
import requests

def getData():
    my_url = "https://firebasestorage.googleapis.com/v0/b/traffic-predictor-233145.appspot.com/o/output.csv?alt=media&token=9b79b904-17ff-4fd0-9637-55844ef9cdf2"
    r = requests.get(my_url, allow_redirects=True)
    open('output.csv', 'wb').write(r.content)
    data = pd.read_csv("output.csv")
    data = data[['Location', 'CurrSpeed', 'NormSpeed', 'Date', 'Hour', 'Congestion']]
    return data