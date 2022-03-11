import sys

n = int(sys.stdin.readline())
i = 1

while i < n:
  n -= i
  i += 1

if i % 2 == 0:
  i -= n-1
  print(n,'/',i, sep = '')
else:
  i -= n-1
  print(i,'/',n, sep = '')
