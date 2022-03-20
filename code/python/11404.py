import sys; rl = sys.stdin.readline
INF = int(1e9)
n = int(input())
m = int(input())
graph = [[INF] * n for _ in range(n)]

for i in range(n):
  graph[i][i] = 0

for _ in range(m):
  a, b, c = map(int, rl().split())
  if graph[a-1][b-1] > c:
    graph[a-1][b-1] = c

for k in range(n):
  for i in range(n):
    if i == k: continue
    for j in range(n):
      if j == k: continue
      if graph[i][j] > graph[i][k] + graph[k][j]:
        graph[i][j] = graph[i][k] + graph[k][j]

for i in range(n):
  for j in range(n):
    if graph[i][j] == INF:
      graph[i][j] = 0

for i in range(n):
  print(*graph[i])
