from __future__ import division
import speed_perf_index as spi
import max_likelihood as maxlikehihood
import congestion_avg as congestion
import numpy as np
import pandas as pd
import math


def calc_threshold(data):

    # # removing redundant rows from the frame
    # data = data[data['Congestion'] != 0.0]
    data = data.reset_index(drop=True)

    f1 = spi.spi(data)
    f2 = maxlikehihood.likelihood(data)
    f3 = congestion.average(data)

    final_threshold=(f1+f2+f3)/3
    return final_threshold



