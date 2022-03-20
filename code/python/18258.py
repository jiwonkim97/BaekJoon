from collections import deque
import sys; rl = sys.stdin.readline

N = int(rl())
dq = deque()
for _ in range(N):
  cmd = rl().split()
  if cmd[0] == 'push':
    dq.append(int(cmd[1]))
    continue
  if cmd[0] == 'pop':
    if dq:
      dq.popleft()
    else:
      print(-1)
    continue
  if cmd[0] == 'size':
    print(len(dq))
    continue
  if cmd[0] == 'empty':
    if dq:
      print(0)
    else:
      print(1)
    continue
  if cmd[0] == 'front':
    if dq:
      print(dq[0])
    else:
      print(-1)
    continue
  if cmd[0] == 'back':
    if dq:
      print(dq[len(dq) - 1])
    else:
      print(-1)
    continue
