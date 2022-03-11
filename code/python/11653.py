import sys
n = int(sys.stdin.readline())
i = 2

while i <= n * 0.5:
  if n % i == 0:
    n = n // i
    print(i)
  else:
    i += 1
if n > 1:
  print(n)
