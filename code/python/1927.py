import sys; rl = sys.stdin.readline
import heapq

N = int(rl())
cmds = [int(rl()) for _ in range(N)]

heap = []

for cmd in cmds:
  if cmd:
    heapq.heappush(heap, cmd)
  else:
    if heap:
      print(heapq.heappop(heap))
    else:
      print(0)
