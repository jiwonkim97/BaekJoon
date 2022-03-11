import sys; rl = sys.stdin.readline

N = int(rl())
P = list(map(int, rl().split()))

P.sort(reverse = True)
minTime = 0

for i in range(N):
  minTime += (i + 1) * P[i]

print(minTime)
