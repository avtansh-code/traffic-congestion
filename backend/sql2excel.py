import MySQLdb
import pandas as pd

user = 'root' # your username
passwd = 'root' # your password
host = 'localhost' # your host
db = 'traffic' # database where your table is stored

con = MySQLdb.connect(user=user, passwd=passwd, host=host, db=db)
cursor = con.cursor()

query = "SELECT * FROM traffic_data;"
cursor.execute(query)

res = cursor.fetchall()

df = pd.DataFrame(data=list(res))

df.columns = ['Location','CurrSpeed', 'NormSpeed', 'Date', 'Time', 'Congestion']

print df

writer = pd.ExcelWriter('output.xlsx')
df.to_excel(writer,'Sheet1')
writer.save()

print('Excel File Created Succesfully')

