import sys; rl = sys.stdin.readline
N, M = map(int, rl().split())
board = {}

for i in range(1, 101):
  board[i] = i

for _ in range(N):
  s, e = map(int, rl().split())
  board[s] = e

for _ in range(M):
  s, e = map(int, rl().split())
  board[s] = e

now = 1
cnt = 0

while now < 100:
  goto = now + 1

  for i in range(1, 7):
    if board[now + i] == 100:
      print(cnt + 1)
      exit(0)
    if goto < board[now + i]:
      goto = board[now + i]

  now = goto
  cnt += 1
