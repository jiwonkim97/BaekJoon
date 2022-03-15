import heapq
import sys; rl = sys.stdin.readline
N = int(rl())
cmds = [int(rl()) for _ in range(N)]
INF = int(1e9)
negative_heap = []
positive_heap = []

for cmd in cmds:
  if cmd > 0:
    heapq.heappush(positive_heap, cmd)
  elif cmd < 0:
    heapq.heappush(negative_heap, -1 * cmd)
  else:
    if not negative_heap and not positive_heap:
      print(0)
    else:
      n = p = INF
      if negative_heap:
        n = heapq.heappop(negative_heap)
      if positive_heap:
        p = heapq.heappop(positive_heap)

      if n == p:
        print(-1 * n)
        heapq.heappush(positive_heap,p)
        continue
      if p < n:
        print(p)
        if n != INF:
          heapq.heappush(negative_heap, n)
        continue
      if n < p:
        print(-1 * n)
        if p != INF:
          heapq.heappush(positive_heap, p)
