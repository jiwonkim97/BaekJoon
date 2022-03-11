import sys;

while True:
  cmd = list(map(int, sys.stdin.readline().split()))
  if cmd == [0,0]:
    break
  a,b = cmd
  if (b / a).is_integer():
    print('factor')
  elif (a / b).is_integer():
    print('multiple')
  else:
    print('neither')
