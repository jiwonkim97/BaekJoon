r =10001
nums = [True] * r
nums[0] = False

for i in range(1, r):
  if not nums[i]:
    continue

  sum = i
  while sum < r:
    strI = str(sum)
    for s in strI:
      sum += int(s)

    if sum < r:
      nums[sum] = False

ret = ''
for num in range(r):
  if nums[num]:
    ret += str(num) + '\n'

print(ret)
