import sys; rl = sys.stdin.readline
n = int(rl())

triangle = [list(map(int, rl().split())) for _ in range(n)]

for i in range(1, n):
  l = len(triangle[i])
  for j in range(l):
    left = right = 0
    if j != 0:
      left = triangle[i-1][j - 1]
    if j != l-1:
      right = triangle[i-1][j]
    triangle[i][j] = triangle[i][j] + max(left, right)

print(max(triangle[n-1]))
