from __future__ import division
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
import math

data=pd.read_excel("output.xlsx")
congestion_avg=data['Congestion'].mean()

#print congestion_avg

cong_var = data['Congestion']
cong_var = cong_var - congestion_avg
cong_var = cong_var * cong_var
val = cong_var.mean()

#print val
part1=0.00
part2=0.00
part3=0.00
max_like=0.00
prob=data['Congestion']
part1=prob-cong_var
part1=part1*part1
part1=part1/(2*cong_var*cong_var)
part1=(-1)*part1
print part1

print "*"*80
part2=[]
for x in range(len(part1)):
    z=(math.exp(part1[x]))
    part2.append((0.3989*z)/val)
print part2

part3=[]
for y in range(len(part2)):
    part3.append(math.log(part2[y]))
    #part3=(-1)*part3

#print part2
print part3

print sum(part3)

