import sys

t = int(sys.stdin.readline())

for _ in range(t):
  n,m,k,q = map(int, sys.stdin.readline().split())
  operations = list(list(map(int, sys.stdin.readline().split())) for _ in range(q))
