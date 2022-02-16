import sys

N = int(sys.stdin.readline())

costs = []

for _ in range(N):
  a,b,c = map(int,sys.stdin.readline().split())
  costs.append([a,b,c])

cost = []
index = -1
