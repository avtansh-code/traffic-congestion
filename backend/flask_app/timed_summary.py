from datetime import datetime, timedelta
import pandas as pd

def summary(data, time):
    
    data['Date'] = pd.to_datetime(data['Date'])
    end = datetime.now()
    start = end - timedelta(days=time)
    mask = (data['Date'] >= start) & (data['Date'] <= end)  
    data = data.loc[mask]

    return data