import math
import sys

n = int(sys.stdin.readline())

start = 0
end = n
mid = (start + end) // 2

while start <= end:

  if mid * mid < n:
    start = mid + 1

  elif mid * mid > n:
    end = mid - 1

  else:
    break

  mid = math.ceil((start + end) / 2)

print(mid)
