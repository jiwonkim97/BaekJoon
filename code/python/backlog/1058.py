import sys; rl = sys.stdin.readline
INF = int(1e9)

N = int(rl())
graph = [[INF] * (N + 1) for _ in range(N + 1)]

case = {'N' : 0, 'Y' : 1}
for a in range(N):
  s = rl().rstrip()
  for b in range(N):
    graph[a + 1][b + 1] = case[s[b]]

for k in range(1, N + 1):
  for a in range(1, N + 1):
    for b in range(1, N + 1):
      if a == b:
        continue
      if graph[a][b] == 0:
        if graph[a][k] == graph[k][b] == 1:
          graph[a][b] = 1

for a in range(1, N + 1):
  for b in range(1, N + 1):
    if graph[a][b] == INF:
      print(-1, end = " ")
    else:
      print(graph[a][b], end = " ")
  print()
