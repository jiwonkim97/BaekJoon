from collections import deque


inp = input()

nums = deque([])
ops = deque([])
ret = 0

temp = ''
for s in inp:
  if s.isdigit():
    temp += s
  else:
    nums.append(int(temp))
    ops.append(s)
    temp = ''
nums.append(int(temp))

while ops:
  op = ops.popleft()
  a = nums.popleft()
  if op == '+':
    b = nums.popleft()
    nums.appendleft(a+b)
  else:
    sum = 0
    while ops and ops[0] == '+':
      ops.popleft()
      sum += nums.popleft()
    sum += nums.popleft()
    nums.appendleft(a - sum)

print(nums[0])
