import sys; rl = sys.stdin.readline
import heapq

N = int(rl())
cmds = [int(rl()) for _ in range(N)]

heap = []
for cmd in cmds:
  if cmd:
    heapq.heappush(heap, -1 * cmd)
  else:
    if heap:
      print(- 1* heapq.heappop(heap))
    else:
      print(0)
