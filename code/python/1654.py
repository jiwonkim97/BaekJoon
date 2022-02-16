import sys

K,N = map(int, sys.stdin.readline().split())
lans = list(int(sys.stdin.readline()) for _ in range(K))

first = 1
last = max(lans)

while first <= last:
  mid = (first + last) // 2

  num = 0
  for lan in lans:
    num += lan // mid

  if num >= N:
    first = mid + 1
  else:
    last = mid - 1

print(last)
