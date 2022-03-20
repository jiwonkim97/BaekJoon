import sys; rl = sys.stdin.readline
sys.setrecursionlimit(int(1e6))

N = int(rl())
board = [list(rl().rstrip()) for _ in range(N)]
visited = [[False] * N for _ in range(N)]
dx = [1,-1,0,0]
dy = [0,0,1,-1]
cnt1 = cnt2 = 0

def dfs(x, y):
  value = board[x][y]
  visited[x][y] = True
  for i in range(4):
    nx = x + dx[i]
    ny = y + dy[i]
    if -1 < nx < N and -1 < ny < N:
      if not visited[nx][ny]:
        if board[nx][ny] == value:
          dfs(nx, ny)

for i in range(N):
  for j in range(N):
    if not visited[i][j]:
      visited[i][j] = True
      dfs(i, j)
      cnt1 += 1

visited = [[False] * N for _ in range(N)]

for i in range(N):
  for j in range(N):
    if board[i][j] == 'G':
      board[i][j] = 'R'

for i in range(N):
  for j in range(N):
    if not visited[i][j]:
      dfs(i, j)
      cnt2 += 1

print(cnt1, cnt2)
