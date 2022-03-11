import sys; rl = sys.stdin.readline

M = int(rl())
set_ = set()

for i in range(M):
  cmd = rl().strip().split()

  if len(cmd) == 1:
    if cmd[0] == 'all':
      set_ = set([x for x in range(1,21)])
    else:
      set_ = set()
    continue

  c, target = cmd[0], int(cmd[1])

  if c == 'add':
    set_.add(target)
  elif c == 'remove':
    set_.discard(target)
  elif c == 'check':
    print(1 if target in set_ else 0)
  elif c == 'toggle':
    if target in set_:
      set_.discard(target)
    else:
      set_.add(target)
