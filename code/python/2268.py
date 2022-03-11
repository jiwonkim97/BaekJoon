import sys; rl = sys.stdin.readline

N,M = map(int, rl().split())
cmds = [list(map(int, rl().split())) for _ in range(M)]
segTree = [0] * N

def modify(target, value):
  diff = value - segTree[target]

  return

def sum_(start, end):
  return


for cmd in cmds:
  if cmd[0] == 0:
    sum_(cmd[1] - 1, cmd[2])
  else:
    modify(cmd[1] - 1, cmd[2])
