import sys; rl = sys.stdin.readline

board = [list(map(int, rl().split())) for _ in range(9)]
spaces = [] # [[x,y,['candidate']], ...]

def check_possibility(x, y, value): # 주어진 x,y좌표에 value값이 올수있는지?
  # 가로, 세로줄 체크
  for i in range(9):
    if i != y and board[x][i] == value:
      return False
    if i != x and board[i][y] == value:
      return False

  # 사각 범위 체크
  left_upper_point = [3 * (x // 3), 3 * (y // 3)]
  for i in range(3):
    for j in range(3):
      if left_upper_point[0] + i == x and left_upper_point[1] + j == y:
        continue

      if board[left_upper_point[0] + i][left_upper_point[1] + j] == value:
        return False

  return True

def check_candidate(x,y): # 주어진 x,y값에 들어갈수 있는 후보값들 추리기
  candidates = {
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
  for i in range(9):  # 가로, 세로 체크
    if i != y:
      value = board[x][i]
      if value and candidates[value]:
        candidates[value] = False
    if i != x:
      value = board[i][y]
      if value and candidates[value]:
        candidates[value] = False

  left_upper_point = [3 * (x // 3), 3 * (y // 3)]
  for i in range(3):  # 사각 범위 체크
    for j in range(3):
      value = board[left_upper_point[0] + i][left_upper_point[1] + j]
      if left_upper_point[0] + i == x and left_upper_point[1] + j == y:
        continue

      if value and candidates[value]:
        candidates[value] = False
  ret = []
  for i in range(1, 10):  # 가능한 후보들만 리턴
    if candidates[i]:
      ret.append(i)
  return ret

def fill_board(depth):  # DFS로 spaces 탐색
  if depth == len(spaces):
    for row in board:
      print(' '.join(map(str, row)))
    exit(0)

  for candidate in spaces[depth][2]:
    if check_possibility(spaces[depth][0],spaces[depth][1],candidate):
      temp = board[spaces[depth][0]][spaces[depth][1]]
      board[spaces[depth][0]][spaces[depth][1]] = candidate
      fill_board(depth + 1)
      board[spaces[depth][0]][spaces[depth][1]] = temp

def initialize(): # 값이 0인 칸들 좌표와 후보들을 담는 spaces 초기화
  for i in range(9):
    for j in range(9):
      if board[i][j] == 0:
        spaces.append([i,j,check_candidate(i,j)])

initialize()
fill_board(0)
