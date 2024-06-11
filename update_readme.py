#!/bin/python3
'''This script add a url to the project site to the top of the readme or replace the url with new one if it doesnt exist'''
import socket
import time


last_updated = time.strftime("%d/%m/%Y %H:%M:%S")
ipv4 = socket.gethostbyname(socket.gethostname())
url = 'http://%s:8000'%ipv4

insert_line = "[!Visit project site](%s)"%url

with open("../README.md", "r") as fd:
  lines = fd.readlines()
  # checking a line after the title
  target_line = lines[1]
  if target_line.startswith('[!Visit project site]'):
    # replace line because its an old link
    lines[1] = insert_line
  else:
    # line doesnt exist lets add it
    lines.insert(1, insert_line)

  # Update the readme with new url
  with open("../README.md", "w") as f:
    counter = 0
    new_str = ""
    for line in lines:
      if not counter:
        # counter = 0
        new_str += "\n%s"%line
      else:
        new_str += line
    f.write(new_str)
    print('README.md file has been updated with new site url')



