import sys; rl = sys.stdin.readline
INF = int(1e9)
N, K = map(int, rl().split())

graph = [[INF] * (N + 1) for _ in range(N + 1)]

for a in range(1, N + 1):
  graph[a][a] = 0

for _ in range(K):
  a, b = map(int, rl().split())
  graph[a][b] = 1
  graph[b][a] = 1

for k in range(1, N + 1):
  for a in range(1, N + 1):
    for b in range(1, N + 1):
      graph[a][b] = min(graph[a][b], graph[a][k] + graph[k][b])

for a in range(1, N + 1):
  for b in range(1, N + 1):
    if graph[a][b] > 6:
      print("Big World!")
      exit(0)
print("Small World!")
