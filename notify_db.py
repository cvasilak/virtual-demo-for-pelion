import psycopg2
import time
import datetime as dt

# Parameters of the online DB

def notify_DB(sensor_value):
    conn = psycopg2.connect(database="domfitphn0gg0", user = "ipfimehurreqbo",
            password = "dabd422b0d666daee65ac9fc6826d4da300808c015d3c807cf6db1a8aabe46c6",
            host = "ec2-54-246-90-10.eu-west-1.compute.amazonaws.com", port = "5432"
    )
    cur = cur = conn.cursor()
    sensor_value = "\'" + str(sensor_value) +"\'"
    print sensor_value
    notification = "NOTIFY test3, " + str(sensor_value)
    print notification
    cur.execute(notification)
    conn.commit() # <--- makes sure the change is shown in the database
    conn.close()
    cur.close()

now = str(dt.datetime.now())
f = open("sensor_value.out","r")
old_value = int( f.readline() )
f.close()
try:
    while True:
        f = open("sensor_value.out","r")
        sensor_value = int( f.readline() )
        f.close()
        time.sleep(0.2)
        if(old_value !=sensor_value):
            notify_DB(sensor_value)
            old_value = sensor_value
except KeyboardInterrupt:
    print "\nCtrl C pressed. Exit"
    exit(0)
