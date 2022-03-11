# 이것은 파이썬 배척이다. 같은 로직으로 Node.js 로는 문제없이 통과했다.

import time
start_time = time.time()

N = int(input())

board = [-1] * N
case = 0

def Queen(cnt):
  if cnt == N:
    global case
    case += 1
    return

  for i in range(N):
    if i in board:  # 가로 체크
      continue

    if check(cnt, i):
      board[cnt] = i
      Queen(cnt + 1)
      board[cnt] = -1


def check(x,y):
  for i in range(x):
    if abs(i-x) == abs(board[i] - y): # 대각 체크
      return False
  return True

Queen(0)
print(case)
print(time.time() - start_time)
