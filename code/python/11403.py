from collections import deque
import sys; rl = sys.stdin.readline

N = int(rl())
adj = [list(map(int, rl().split())) for _ in range(N)]
ret = [[0] * N for _ in range(N)]

visited = [True] * N
connects = []

def bfs(idx):
  connect = []
  dq = deque([idx])

  while dq:
    temp = dq.popleft()
    connect.append(temp)
    for i in range(N):
      if adj[temp][i] == 1 and visited[i]:
        dq.append(i)
        visited[i] = False

  connects.append(connect)

def fillRet():
  for connect in connects:
    '걁?'

for i in range(N):
  if visited[i]:
    visited[i] = False
    bfs(i)



for row in ret:
  print(' '.join(map(str, row)))
