import time
from time import sleep
while True:
	f = open("shushlimit.txt","w+")
	f.write("0")
	f.close()
	print("Limit cleared")
	sleep(86400)
	
