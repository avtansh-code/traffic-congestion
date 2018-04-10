from __future__ import division
import getData as gd
import pandas as pd
from sklearn.linear_model import LinearRegression

def getCongestion(loc_data, day, hour):
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

    x = loc_data[['Hour','WeekNo']]
    y = loc_data['Congestion']

    genius_regression_model = LinearRegression()
    genius_regression_model.fit(x,y)

    x_test = [[hour,day]]
    val = genius_regression_model.predict(x_test)

    return val[0]