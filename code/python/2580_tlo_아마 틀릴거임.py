from collections import deque
import sys; rl = sys.stdin.readline

board = [list(map(int, rl().split())) for _ in range(9)]
n = 9
point0 = deque([])

for i in range(n):  # 0인 값들 좌표
  for j in range(n):
    if board[i][j] == 0:
      point0.append([i, j])

def Sudoku():
  while point0:
    x,y = point0.popleft()
    board[x][y] = check(x, y)

def check(i,j):
  arr = []  # 후보 배열
  squareIdx = [3 * (i // 3), 3 * (j // 3)]

  # 적합성 검사
  nums = {
    1 : True,
    2 : True,
    3 : True,
    4 : True,
    5 : True,
    6 : True,
    7 : True,
    8 : True,
    9 : True,
  }

  for k in range(9):  # 가로, 세로 검사
    if board[i][k] == 0 or board[k][j] == 0:
      continue
    if nums[board[i][k]]:
      nums[board[i][k]] = False
    if nums[board[k][j]]:
      nums[board[k][j]] = False

  for n in range(3):  # 3x3 구역 검사
    for m in range(3):
      k = board[squareIdx[0] + n][squareIdx[1] + m]
      if k == 0:
        continue
      if nums[k]:
        nums[k] = False

  for k in range(1, 10):
    if nums[k]:
      arr.append(k)

  if len(arr) == 0:
    return
  if len(arr) == 1:
    return arr[0]
  else:
    point0.append([i, j])
    return 0

def printBoard():
  for row in board:
    print(' '.join(map(str, row)))

Sudoku()
printBoard()
