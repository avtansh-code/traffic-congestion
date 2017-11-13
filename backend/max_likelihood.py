from __future__ import division
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

data=pd.read_excel("output.xlsx")
congestion_avg=data['Congestion'].mean()

print congestion_avg

cong = data['Congestion']
cong = cong - congestion_avg
cong = cong * cong
val = cong.mean()

print val

