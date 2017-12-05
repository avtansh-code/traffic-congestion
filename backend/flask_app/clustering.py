from sklearn.datasets.samples_generator import make_blobs
import matplotlib.pyplot as plt
from sklearn import datasets
from sklearn.cluster import KMeans
import sklearn.metrics as sm
import seaborn as sns;sns.set()
from sklearn.decomposition import PCA
import pandas as pd
import numpy as np
 
def predictCluster(df, val):
    df['ExtraColumn'] = 1
    kmeans_model = KMeans(n_clusters=3, random_state=1)
    good_columns = df[['ExtraColumn','Congestion']]
    kmeans_model.fit(good_columns)
    labels = kmeans_model.labels_
    arr = kmeans_model.predict([[1,val]])
    return arr[0]