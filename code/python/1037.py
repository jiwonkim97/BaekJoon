import sys; rl = sys.stdin.readline

N = int(rl())
nums = list(map(int, rl().split()))

if N == 1:
  print(nums[0] ** 2)
  exit(0)

nums.sort()
print(nums[0] * nums[len(nums)-1])
