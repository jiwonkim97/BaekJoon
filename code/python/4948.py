import sys; rl = sys.stdin.readline

n=246912
a = [False,False] + [True]*(n-1)

for i in range(2,n+1):
  if a[i]:
    for j in range(2*i, n+1, i):
        a[j] = False

ns = []
while True:
  n = int(rl())
  if n == 0:
    break
  ns.append(n)

for n in ns:
  cnt = 0
  for i in range(n + 1, 2*n+1):
    if a[i]:
      cnt += 1
  print(cnt)
