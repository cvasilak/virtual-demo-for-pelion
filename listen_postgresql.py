import select
import psycopg2
import psycopg2.extensions

#conn = psycopg2.connect(DSN)

conn = psycopg2.connect(database="domfitphn0gg0", user = "ipfimehurreqbo",
        password = "dabd422b0d666daee65ac9fc6826d4da300808c015d3c807cf6db1a8aabe46c6",
        host = "ec2-54-246-90-10.eu-west-1.compute.amazonaws.com", port = "5432"
)
conn.set_isolation_level(psycopg2.extensions.ISOLATION_LEVEL_AUTOCOMMIT)

curs = conn.cursor()
#curs.execute("SELECT * from test2")
curs.execute("LISTEN test3;")

print "Waiting for notifications"
while True:
    if select.select([conn],[],[],5) == ([],[],[]):
        print "Timeout"
    else:
        conn.poll()
        while conn.notifies:
            notify = conn.notifies.pop()
            print notify
            print "Got NOTIFY:", notify.pid, notify.channel, notify.payload
