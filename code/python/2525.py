import sys; rl = sys.stdin.readline

A,B = map(int, rl().split())
C = int(rl())

A += C//60
B += C % 60
if B > 59:
  B -= 60
  A += 1
if A > 23:
  A -= 24
print(A,B)
