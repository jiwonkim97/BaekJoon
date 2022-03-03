import sys

T = int(sys.stdin.readline())
cases = list(int(sys.stdin.readline()) for _ in range(T))

max_ = max(cases) + 1
arr = [[0,0] for _ in range(max_)]
arr[0], arr[1] = [1,0], [0,1]

for i in range(2, max_):
  arr[i] = [arr[i-1][0] + arr[i-2][0], arr[i-1][1] + arr[i-2][1]]

for case in cases:
  print(arr[case][0], arr[case][1])
