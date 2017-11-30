from sklearn.datasets.samples_generator import make_blobs
import matplotlib.pyplot as plt
from sklearn import datasets
from sklearn.cluster import KMeans
import sklearn.metrics as sm
import seaborn as sns;sns.set()
from sklearn.decomposition import PCA
import pandas as pd
import numpy as np
 
# Only needed if you want to display your plots inline if using Notebook
# change inline to auto if you have Spyder installed
#%matplotlib inline

df = pd.read_csv('output.csv')
df=df[df["Congestion"]>0]
#plt.hist(df["Congestion"])
#plt.show()
df['CurrSpeed']=1
kmeans_model = KMeans(n_clusters=4, random_state=1)
#good_columns = df._get_numeric_data()
good_columns=df[['CurrSpeed','Congestion']]
#print(good_columns.head(10))

kmeans_model.fit(good_columns)
labels = kmeans_model.labels_
pca_2 = PCA(2)
#colors = np.array(['red', 'green', 'blue'])
plot_columns = pca_2.fit_transform(good_columns)
plt.scatter(x=plot_columns[:,0], y=plot_columns[:,1], c=labels)
plt.show()
#x = pd.DataFrame(columns=['CurrSpeed'])
# x.columns = ['currSpeed']
#y = pd.DataFrame(colums=['Congestion'])
# y.columns = ['Congestion']

# plt.figure(figsize=(14,7))
 
# # Create a colormap
# colormap = np.array(['red', 'lime', 'black'])
 
# # Plot Sepal
# plt.subplot(1, 2, 1)
# plt.scatter(x.currSpeed, c=colormap[y.Congestion], s=40)
# plt.title('KMeans Clustering')
# df1 = data.drop(["Location", "NormSpeed","Date","Hour"], axis = 1) 
# km = KMeans(n_clusters=4, init='k-means++', n_init=10)
# km.fit(df1)
# f1=df['CurrSpeed'].values
# f2=df['Congestion'].values
# X = np.array(list(zip(f1, f2)))

# kmeans = KMeans(n_clusters=4)
# # Fitting with inputs
# kmeans = kmeans.fit(X)
# # Predicting the clusters
# labels = kmeans.predict(X)
# # Getting the cluster centers
# C = kmeans.cluster_centers_
# fig = plt.figure()
# ax = Axes3D(fig)
# ax.scatter(X[:, 0], X[:, 1], X[:, 2], c=y)
# ax.scatter(C[:, 0], C[:, 1], C[:, 2], marker='*', c='#050505', s=1000)