import sys
n = sys.stdin.readline().rstrip()

cnt = 0
newN = n
while True:
  if len(newN) == 1:
    newN = '0' + newN

  sum = str(int(newN[0]) + int(newN[1]))
  newN = newN[1] + sum[len(sum)-1]
  cnt += 1

  if int(newN) == int(n):
    break
print(cnt)
