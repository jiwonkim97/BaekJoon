import sys

N,X = map(int, sys.stdin.readline().split())

visits = list(map(int, sys.stdin.readline().split()))

s = sum(visits[0:X]);
M = s;
cnt = 1;

if N != X:
  for i in range(1, N - X + 1):
    s -= visits[i - 1]
    s += visits[i + X - 1]

    if s > M:
      M = s
      cnt = 0

    if s == M:
      cnt += 1

if M == 0:
  print("SAD")

else:
  print(M)
  print(cnt)
