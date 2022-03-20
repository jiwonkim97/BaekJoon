from collections import deque
import sys; rl = sys.stdin.readline

T = int(rl())
ops = ['D','S','L','R']

def calc(op, s):
  if op == 'D':
    return (s * 2) % 10000

  if op == 'S':
    if s == 0:
      return 9999
    else:
      return s - 1

  if op == 'L':
    return (s % 1000) * 10 + s // 1000

  if op == 'R':
    return (s % 10) * 1000 + s // 10

def bfs():
  dq = deque([[start, '']])

  while dq:
    s,path = dq.popleft()

    for i in range(4):
      temp = calc(ops[i], s)
      if temp == end:
        print(path + ops[i])
        return
      else:
        if not visited[temp]:
          visited[temp] = True
          dq.append([temp, path + ops[i]])

for _ in range(T):
  start, end = map(int, rl().split())
  visited = [False] * 10000
  bfs()
