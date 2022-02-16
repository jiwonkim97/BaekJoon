import sys

T = int(sys.stdin.readline())
nums = [int(sys.stdin.readline()) for _ in range(T)]

arr = [0] * max(nums)

for i in range(max(nums) + 1):
