import sys; rl = sys.stdin.readline

N,M = map(int, rl().split())
nums = list(map(int, rl().split()))
sections = list(list(map(int, rl().split())) for _ in range(M))

sumList = [nums[0]]
for i in range(1,len(nums)):
  sumList.append(nums[i] + sumList[-1])

def Sum(x,y):
  if x == 0:
    return sumList[y]
  return sumList[y] - sumList[x-1]

for section in sections:
  print(Sum(section[0] - 1, section[1] - 1))
