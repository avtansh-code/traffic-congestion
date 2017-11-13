import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

data=pd.read_excel("output.xlsx")
data = xlrd.open_workbook("")
var curr_speed=fetch()
var flow_speed=fetch()
var speed_performance_index
speed_performance_index=curr_speed/flow_speed
