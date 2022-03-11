import sys

M = int(sys.stdin.readline())
N = int(sys.stdin.readline())

m = 0
sum = 0

def check(n):
  if n == 1:
    return False
  if n == 2 or n == 3:
    return True
  for i in range(2, n):
    if n % i == 0:
      return False
  return True

for i in range(M, N+1):
  if check(i):
    if sum == 0:
      m = i
    sum += i

if sum == 0:
  print(-1)
  exit(0)
print(sum)
print(m)
