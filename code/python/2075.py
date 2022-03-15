import sys; rl = sys.stdin.readline
import heapq
N = int(rl())

grid = [list(map(int, rl().split())) for _ in range(N)]
pointers = [N - 1] * N

for i in range(N):
  nums = [grid[pointers[x]][x] for x in range(N)]
  if i == N-1:
    print(max(nums))
  else:
    pointers[nums.index(max(nums))] -= 1

# heaps = [[] for _ in range(N)]

# for _ in range(N):
#   line = list(map(int, rl().split()))
#   for i in range(N):
#     heapq.heappush(heaps[i], -1 * line[i])

# nums = [0] * N
# for i in range(N):
#   nums[i] = -1 * heapq.heappop(heaps[i])

# for i in range(N - 1):
#   idx = nums.index(max(nums))
#   nums[idx] = -1 * heapq.heappop(heaps[idx])

# print(max(nums))
