from collections import deque
import sys; rl = sys.stdin.readline
N, M = map(int, rl().split())
lines = [list(map(int, rl().split())) for _ in range(M)]
grid = [[False] * N for _ in range(N)]

for line in lines:
  grid[line[0] - 1][line[1] - 1] = True
  grid[line[1] - 1][line[0] - 1] = True



visited = [True] * N

def bfs(idx):
  dq = deque([idx])

  while dq:
    temp = dq.popleft()
    for i in range(N):
      if grid[temp][i] and visited[i]:
        visited[i] = False
        dq.append(i)


cnt = 0
for i in range(len(visited)):
  if visited[i]:
    cnt += 1
    visited[i] = False
    bfs(i)

print(cnt)
