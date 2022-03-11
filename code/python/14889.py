import sys; rl = sys.stdin.readline

N = int(rl())
grid = [list(map(int, rl().split())) for _ in range(N)]

team = [0] * N
min_ = 10000

def makeTeam(idx, cnt):
  global team
  if cnt == N//2:
    global min_
    start, link = 0,0
    for i in range( N):
      for j in range(N):
        if team[i] and team[j]:
          start += grid[i][j]
          continue
        if not team[i] and not team[j]:
          link += grid[i][j]
          continue

    min_ = min(min_, abs(start - link))
    return

  for i in range(idx, N):
    if team[i] == 0:
      team[i] = 1
      makeTeam(i + 1, cnt + 1)
      team[i] = 0


makeTeam(0, 0)

print(min_)
