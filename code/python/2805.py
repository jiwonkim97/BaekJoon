import sys

N,M = map(int, sys.stdin.readline().split())
nums = list(map(int, sys.stdin.readline().split()))

first = 1
last = max(nums)

while first <= last:
  mid = (last + first) // 2
  cut_wood = 0

  for num in nums:
    if num > mid:
      cut_wood += num - mid

  if cut_wood >= M:
    first = mid + 1
  else:
    last = mid - 1

print(last)
"""
for height in range(nums[0], -1, -1):
  cut_wood = 0
  for num in nums:
    if(num <= height):
      break

    cut_wood += num - height

  if(cut_wood >= M):
    print(height)
    break
"""
