import heapq
import sys; rl = sys.stdin.readline
INF = int(1e9)
V, E = map(int, rl().split())
start = int(rl())

adj_list = [[] for _ in range(V + 1)]
adj_arr = [[INF] * (V + 1) for _ in range(V + 1)]
distance = [INF] * (V + 1)

for _ in range(E):
  u,v,w = map(int, rl().split())
  if v in adj_list[u]:
    if adj_arr[u][v] > w:
      adj_arr[u][v] = w
  else:
    adj_arr[u][v] = w
    adj_list[u].append(v)

def dijkstra(start):
  q = []
  distance[start] = 0
  heapq.heappush(q, (0, start))

  while q:
    dist, now = heapq.heappop(q)
    if distance[now] < dist:
      continue

    for i in range(len(adj_list[now])):
      cost = dist + adj_arr[now][adj_list[now][i]]
      if cost < distance[adj_list[now][i]]:
        distance[adj_list[now][i]] = cost
        heapq.heappush(q, (cost, adj_list[now][i]))

dijkstra(start)

for i in range(1, V + 1):
  dist = distance[i]
  if dist == INF:
    print('INF')
  else:
    print(dist)
