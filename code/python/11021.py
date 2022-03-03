import sys; rl = sys.stdin.readline
T = int(rl())

for i in range(T):
  A,B= map(int, rl().split())
  print('Case #',i+1,': ',A+B, sep='')
