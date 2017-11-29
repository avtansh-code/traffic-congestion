from __future__ import division
import math

def spi(data):
    sum_of_curr_speed=data['CurrSpeed'].sum()
    sum_of_norm_speed=data['NormSpeed'].sum()
    speed_performance_index = 0.00
    return (1-(sum_of_curr_speed/sum_of_norm_speed))*100