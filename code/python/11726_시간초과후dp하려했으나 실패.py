import math

n = int(input())
cases = [0] * (n + 1)

cases[1] = 1
cases[2] = 2

for i in range(3, n + 1):
  cnt = 0
  for j in range(math.ceil(i/2), i):
    cnt += cases[j]
  if i % 2 == 0:
    cnt -= cases[i//2]
    cnt += 1

  cases[i] = cnt + 1

print(cases)
print(cases[n])

# 4: 4C0 + 3C1 + 2C2
#   1 1 1 1
#   1 1 2
#   1 2 1
#   2 1 1
#   2 2
# 5: 5C0 + 4C1 + 3C2
#   1 1 1 1 1
#   1 1 1 2
#   1 1 2 1
#   1 2 1 1
#   2 1 1 1
#   1 2 2
#   2 1 2
#   2 2 1
# 6: 6C0 + 5C1 + 4C2 + 3C3
#   1 1 1 1 1 1
#   1 1 1 1 2
#   1 1 1 2 1
#   1 1 2 1 1
#   1 2 1 1 1
#   2 1 1 1 1
#   1 1 2 2
#   1 2 1 2
#   2 1 1 2
#   1 2 2 1
#   2 1 2 1
#   2 2 1 1
#   2 2 2
