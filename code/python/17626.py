# import time

# ST = time.time()
  # dp, 브루트포스
N = int(input())

if (N ** 0.5).is_integer():
  print(1)
  exit(0)

nums = [[],[],[]]
# 1인 경우
nums[1] = [x * x for x in range(1, int(N ** 0.5) + 1)]

# 2인 경우
for i in range(len(nums[1])):
  for j in range(len(nums[1])):
    s = nums[1][i] + nums[1][j]
    if s > N:
      break
    if s == N:
      print(2)
      exit(0)
    if s < N:
      nums[2].append(s)

# 3인 경우
for i in nums[1]:
  if (N - i) in nums[2]:
    print(3)
    exit(0)

# 그 외는 4인경우
print(4)

# print(time.time() - ST)

### dfs로 시도했다가 틀림
# nums = []

# for i in range(1, int(N ** 0.5) + 1):
#   nums.append(i ** 2)

# nums.reverse()
# visited = [True] * len(nums)

# min_ = 4

# def dfs(depth, sum):
#   print(depth, sum)
#   if sum > N:
#     return
#   if sum == N:
#     global min_
#     min_ = min(min_, depth)
#     return
#   if depth == 3:
#     if ((N - sum) ** 0.5).is_integer():
#       min_ = min(min_, depth)
#     return

#   for i in range(len(nums)):
#     if visited[i]:
#       visited[i] = False
#       dfs(depth + 1, sum + nums[i])
#       visited[i] = True


# dfs(0, 0)
# print(min_)
