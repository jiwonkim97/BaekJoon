from itertools import combinations
import math

n = int(input())
cnt = 0
nums = [x for x in range(n)]

for i in range(n, math.ceil(n / 2) - 1, -1):
  cnt += len(list(combinations(nums, n - i)))
  if cnt > 10007:
    cnt -= 10007
  nums.pop()

print(cnt)
