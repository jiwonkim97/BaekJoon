import sys; rl = sys.stdin.readline
n = int(rl())
wines = [int(rl()) for _ in range(n)]
dp_table = []

dp_table.append(wines[0])
if n == 1:
  print(dp_table.pop())
  exit(0)
dp_table.append(wines[0] + wines[1])
if n == 2:
  print(dp_table.pop())
  exit(0)
dp_table.append(max(wines[0] + wines[2], wines[1] + wines[2]))
if n == 3:
  print(dp_table.pop())
  exit(0)

for i in range(3, n):
  dp_table.append(max(wines[i] + dp_table[i-2], wines[i] + wines[i-1] + dp_table[i-3], dp_table[i-1]))

print(dp_table.pop())
