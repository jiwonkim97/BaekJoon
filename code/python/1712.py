import sys

a,b,c = map(int, sys.stdin.readline().split())

if b >= c:
  print(-1)
  exit(0)

diff = c - b

print(a // diff + 1)
