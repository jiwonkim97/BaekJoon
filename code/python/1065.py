import sys
n = int(sys.stdin.readline())

cnt = 0
for i in range(1, n+1):
  if i < 10:
    cnt += 1
    continue
  sI = str(i)
  diff = int(sI[0]) - int(sI[1])
  flag = False

  for j in range(0, len(sI) - 1):
    if flag:
      break
    if int(sI[j]) - int(sI[j+1]) != diff:
      flag = True

  if not flag:
    cnt += 1
print(cnt)
