from collections import deque
import sys; rl = sys.stdin.readline

C = int(rl())

for _ in range(C):
  scores = deque(list(map(int, sys.stdin.readline().split())))
  N = scores.popleft()

  average = sum(scores) / N
  winner = 0

  for score in scores:
    if score > average:
      winner += 1

  percentage = winner / N * 100
  print('%0.3f'%percentage,'%',sep = '')
