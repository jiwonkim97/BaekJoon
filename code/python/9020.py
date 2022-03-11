import sys; rl = sys.stdin.readline

T = int(rl())
ns = []
for _ in range(T):
  ns.append(int(rl()))

n = 10000
a = [False, False] + [True] * (n-1)
primes = []

for i in range(2, n + 1):
  if a[i]:
    primes.append(i)
    for j in range(2 * i, n + 1, i):
      a[j] = False


for n in ns:
  for h in range(n//2, 1, -1):
    if h in primes and (n-h) in primes:
      print(h, n-h)
      break
