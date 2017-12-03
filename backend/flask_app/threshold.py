from __future__ import division
import speed_perf_index as threshold
import max_likelihood as maxlikehihood
import congestion_avg as congestion
import getData
import numpy as np
import pandas as pd
import math

data = getData.getData()

f1 = threshold.spi(data)
f2 = maxlikehihood.likelihood(data)
f3 = congestion.average(data)

final=(f1+f2+f3)/3
print final



