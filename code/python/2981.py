import sys; rl = sys.stdin.readline
N = int(rl())
nums = [int(rl()) for _ in range(N)]
ret = []

temp = abs(nums[0] - nums[1])

yaksoos = []
for i in range(1, int(temp ** 0.5) + 1):
  if temp % i == 0:
    yaksoos.append(i)
    if temp // i != i:
      yaksoos.append(temp // i)
yaksoos.remove(1)

for yaksoo in yaksoos:
  flag = True
  remain = nums[0] % yaksoo

  for num in nums:
    if num % yaksoo != remain:
      flag = False
      break
  if flag:
    ret.append(yaksoo)

ret.sort()
print(*ret)
