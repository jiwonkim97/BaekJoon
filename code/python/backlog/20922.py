import sys

N,K = map(int, sys.stdin.readline().split())

nums = list(map(int, sys.stdin.readline().split()))
lPointer = 0
rPointer = 0
M = 0
l = 0

if N == 1:
  print(1)
  sys.exit(0)

dic = dict.fromkeys([x for x in range(max(nums) + 1)], 0)

while rPointer < N-1: #lPointer < N - 1 and
  if M > N // 2:
    break

  if dic[nums[rPointer]] >= K:
    if M < l:
      M = l
      l = 0

    dic[nums[lPointer]] -= 1
    lPointer += 1

  else:
    dic[nums[rPointer]] += 1
    l += 1
    rPointer += 1

print(M)
