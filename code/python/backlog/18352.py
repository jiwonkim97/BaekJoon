import sys; rl = sys.stdin.readline
N, M, K, X = map(int, rl().split())
INF = int(1e9)

adj_list = [[] for _ in range(N + 1)]
visited = [False] * (N + 1)
distance = [INF] * (N + 1)

for _ in range(M):
  start, end = map(int, rl().split())
  adj_list[start].append(end)

def get_smallest_distance_index():
  ret = INF
  index = 0
  for i in range(1, N + 1):
    if distance[i] < ret and not visited[i]:
      ret = distance[i]
      index = i
  return index

def dijkstra(start):
  visited[start] = True
  distance[start] = 0
  for j in adj_list[start]:
    distance[j] = 1

  for _ in range(N - 1):
    now = get_smallest_distance_index()
    visited[now] = True
    for j in adj_list[now]:
      dist = distance[now] + 1
      if distance[j] > dist:
        distance[j] = dist

dijkstra(X)
flag = True
for i in range(1, N + 1):
  if distance[i] == K:
    if flag :
      flag = False
    print(i)
if flag:
  print(-1)
