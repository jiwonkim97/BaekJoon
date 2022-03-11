import sys; rl = sys.stdin.readline
cases = []
arr=[[[1 for _ in range(21)] for _ in range(21)] for _ in range(21)]
ans = []

while True:
  a,b,c = map(int, rl().split())
  if a == b == c == -1:
    break
  cases.append([a,b,c])

for i in range(1, 21):
  for j in range(1, 21):
    for k in range(1, 21):
      if i < j < k :
        arr[i][j][k] = arr[i][j][k-1] + arr[i][j-1][k-1] - arr[i][j-1][k]
      else:
        arr[i][j][k] = arr[i-1][j][k] + arr[i-1][j-1][k] + arr[i-1][j][k-1] - arr[i-1][j-1][k-1]


for case in cases:
  if min(case) <= 0:
    ans.append(1)
    continue
  if max(case) > 20:
    ans.append(arr[20][20][20])
    continue
  ans.append(arr[case[0]][case[1]][case[2]])

for i in range(len(cases)):
  a,b,c = cases[i]
  an = ans[i]
  print('w(', a,', ',b,', ',c,') = ', an, sep = '')
