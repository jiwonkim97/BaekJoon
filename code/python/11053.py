import sys; rl = sys.stdin.readline
N = int(rl())
A = list(map(int, rl().split()))
l = [1] * N

for i in range(1, N):
  temp = [0]
  for j in range(i):
    if A[j] < A[i]:
      temp.append(l[j])
  l[i] = max(temp) + 1

print(max(l))
