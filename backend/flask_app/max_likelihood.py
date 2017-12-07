from __future__ import division
import math

def likelihood(data):
    congestion_avg = data['Congestion'].mean()

    cong_var = data['Congestion']
    cong_var = cong_var - congestion_avg
    cong_var = cong_var * cong_var
    val = cong_var.mean()


    prob=data['Congestion']
    part1=prob-cong_var
    part1=part1*part1
    part1=part1/(2*cong_var*cong_var)
    part1=(-1)*part1

    part2=[]
    for x in range(len(part1)):
        z=(math.exp(part1[x]))
        part2.append((0.3989*z)/val)

    return data.at[part2.index(max(part2)),'Congestion']

