from __future__ import division
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
import xlrd

data=pd.read_excel("output.xlsx")
#data = xlrd.open_workbook("output.xlsx")
#sheet=data.sheet_by_name('Sheet1')
congestion_avg=data['Congestion'].mean()
print(congestion_avg)