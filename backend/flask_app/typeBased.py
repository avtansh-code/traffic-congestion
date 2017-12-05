import timed_summary as ts

def dataBasedOnType(data, dataType):
    if dataType == 'overview':
        return data
    elif dataType == 'monthly':
        return ts.summary(data, 30)
    elif dataType == 'weekly':
        return ts.summary(data, 7)
    elif dataType == 'daily':
        return ts.summary(data, 1)
    else:
        return data