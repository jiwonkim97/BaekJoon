import sys; rl = sys.stdin.readline
x = int(rl())
y = int(rl())

if x > 0:
  if y > 0:
    print(1)
  else:
    print(4)
else:
  if y > 0:
    print(2)
  else:
    print(3)
