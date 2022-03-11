import sys; rl = sys.stdin.readline

N = int(rl())
paper = [list(map(int, rl().split())) for _ in range(N)]
color = [0,0]
dx = [0,1,0,1]
dy = [0,0,1,1]

def check(x, y, len):
  value = paper[x][y]
  flag = True
  if len == 1:
    color[value] += 1
    return

  for i in range(x, x + len):
    for j in range(y, y + len):
      if paper[i][j] != value:
        flag = False
        for k in range(4):
          difX = int(dx[k] * 0.5 * len)
          difY = int(dy[k] * 0.5 * len)
          check(x +difX, y + difY, int(len * 0.5))
        return
  if flag:
    color[value] += 1

check(0,0,N)
print('\n'.join(map(str,color)))
