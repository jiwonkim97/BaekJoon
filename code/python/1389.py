import sys; rl = sys.stdin.readline
INF = int(1e9)
N, M = map(int, rl().split())

realationships = [list(map(int, rl().split())) for _ in range(M)]
adj_mat = [[INF] * N for _ in range(N)]

for i in range(N):
  adj_mat[i][i] = 0

for relationship in realationships:
  x, y = relationship
  adj_mat[x-1][y-1] = 1
  adj_mat[y-1][x-1] = 1

for k in range(N):
  for i in range(N):
    if i == k: continue
    for j in range(N):
      if j == k: continue
      if adj_mat[i][j] > adj_mat[i][k] + adj_mat[k][j]:
        adj_mat[i][j] = adj_mat[i][k] + adj_mat[k][j]

nums = [sum(adj_mat[x]) for x in range(N)]
print(nums.index(min(nums)) + 1)
