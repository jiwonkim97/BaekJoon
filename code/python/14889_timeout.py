import sys; rl = sys.stdin.readline

N = int(rl())
grid = [list(map(int, rl().split())) for _ in range(N)]

min_ = 10000

def makeTeam(cnt):
  if cnt == N//2:
    global min_
    for i in range(N):
      if members[i]:
        team[1].append(i)

    diff = getScore()
    if diff < min_:
      min_ = diff

    team[1] = []
    return

  for i in range(N):
    if members[i]:
      members[i] = False
      team[0].append(i)
      makeTeam(cnt + 1)
      members[i] = True
      team[0].pop()

def getScore():
  score = [0,0]
  for i in range(N):
    for j in range(N):
      if i in team[0] and j in team[0]:
        score[0] += grid[i][j]
        continue
      if i in team[1] and j in team[1]:
        score[1] += grid[i][j]
        continue

  return abs(score[0] - score[1])

members = [True] * N
team = [[],[]]

makeTeam(0)

print(min_)
