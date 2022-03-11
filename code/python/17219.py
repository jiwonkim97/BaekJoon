import sys; rl = sys.stdin.readline

N,M = map(int, rl().split())

dic = {}

for _ in range(N):
  k, v = rl().split()
  dic[k] = v

for _ in range(M):
  temp = rl().strip()
  print(dic[temp])
