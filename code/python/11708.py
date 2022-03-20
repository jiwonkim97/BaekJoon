import sys; rl = sys.stdin.readline
INF = int(1e9)
n = int(input())
m = int(input())
graph = [[INF] * (n + 1) for _ in range(n + 1)]
path = [[[] for _ in range(n + 1)] for _ in range(n + 1)]
# for i in range(1, n + 1):
#   row = [0]
#   for j in range(1, n + 1):
#     if i == j:
#       row.append([0])
#       continue
#     row.append([j])
#   path.append(row)

for i in range(1, n + 1):
  graph[i][i] = 0

for _ in range(m):
  a, b, c = map(int, rl().split())
  if graph[a][b] > c:
    graph[a][b] = c
    path[a][b] = [b]

for k in range(1, n + 1):
  for i in range(1, n + 1):
    if i == k: continue
    for j in range(1, n + 1):
      if j == k: continue
      if graph[i][j] > graph[i][k] + graph[k][j]:
        graph[i][j] = graph[i][k] + graph[k][j]
        path[i][j] = path[i][k] + path[k][j]

for i in range(1, n + 1):
  for j in range(1, n + 1):
    if graph[i][j] == INF:
      graph[i][j] = 0

for i in range(1, n + 1):
  print(*graph[i][1:])

for i in range(1, n + 1):
  for j in range(1, n + 1):
    if i == j:
      print(0)
    else:
      print(len(path[i][j]) + 1, i, *path[i][j])
