from __future__ import division
import getData as gd
import pandas as pd
from sklearn.linear_model import LogisticRegression

def getCongestion(loc_data, day, hour, threshold):

    loc_data = loc_data.reset_index(drop=True)

    for index,row in loc_data.iterrows():
        if row['Weekday'] == 'Monday':
            loc_data.loc[index,'WeekNo'] = 0
        elif row['Weekday'] == 'Tuesday':
            loc_data.loc[index,'WeekNo'] = 1
        elif row['Weekday'] == 'Wednesday':
            loc_data.loc[index,'WeekNo'] = 2
        elif row['Weekday'] == 'Thursday':
            loc_data.loc[index,'WeekNo'] = 3
        elif row['Weekday'] == 'Friday':
            loc_data.loc[index,'WeekNo'] = 4
        elif row['Weekday'] == 'Saturday':
            loc_data.loc[index,'WeekNo'] = 5
        else:
            loc_data.loc[index,'WeekNo'] = 6

        if row['Congestion'] >= threshold:
            loc_data.loc[index,'Cong_Status'] = 'Yes'
        else:
            loc_data.loc[index,'Cong_Status'] = 'No'

    x_train = loc_data[['Hour','WeekNo']]
    y_train = loc_data['Cong_Status']


    logisticRegr = LogisticRegression()
    logisticRegr.fit(x_train, y_train)

    x_test = [[hour,day]]
    val = logisticRegr.predict(x_test)   

    return val[0]
