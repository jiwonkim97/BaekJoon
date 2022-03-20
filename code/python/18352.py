import heapq
import sys; rl = sys.stdin.readline
N, M, K, X = map(int, rl().split())
INF = int(1e9)

adj_list = [[] for _ in range(N + 1)]
distance = [INF] * (N + 1)

for _ in range(M):
  start, end = map(int, rl().split())
  adj_list[start].append(end)

def dijkstra(start):
  q = []
  heapq.heappush(q, (0, start))
  distance[start] = 0

  while q:
    dist, now = heapq.heappop(q)
    if distance[now] < dist:
      continue
    for i in adj_list[now]:
      cost = dist + 1
      if cost < distance[i]:
        distance[i] = cost
        heapq.heappush(q, (cost, i))

dijkstra(X)
flag = True
for i in range(1, N + 1):
  if distance[i] == K:
    if flag :
      flag = False
    print(i)
if flag:
  print(-1)
