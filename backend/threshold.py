from __future__ import division
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
import xlrd

data=pd.read_excel("output.xlsx")
#data = xlrd.open_workbook("output.xlsx")
#sheet=data.sheet_by_name('Sheet1')
sum_of_curr_speed=data['CurrSpeed'].sum()
#sum_of_norm_speed=sum(sheet['NormSpeed'])
sum_of_norm_speed=data['NormSpeed'].sum()
speed_performance_index = 0.00
speed_performance_index=1-(sum_of_curr_speed/sum_of_norm_speed)
print(speed_performance_index)