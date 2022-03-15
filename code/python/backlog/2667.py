import sys; rl = sys.stdin.readline
N = int(rl())
grid = []

for _ in range(N):
  row = rl().rstrip()
  tempArr = []
  for s in row:
    tempArr.append(int(s))
  grid.append(tempArr)

danjis = []
dx = [1,-1,0,0]
dy = [0,0,1,-1]

def dfs(x,y, cnt):
  if grid[x][y] == 1:
    grid[x][y] = 0
    cnt += 1

  for i in range(4):
    nx, ny = x+dx[i], y+dy[i]
    if 0 <= nx < N and 0 <= ny < N:
      if grid[nx][ny] == 1:
        cnt = dfs(nx,ny,cnt)

  return cnt

for i in range(N):
  for j in range(N):
    if grid[i][j] == 1:
      danjis.append(dfs(i, j, 0))

danjis.sort()

print(len(danjis))
for danji in danjis:
  print(danji)
