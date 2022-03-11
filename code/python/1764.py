import sys; rl = sys.stdin.readline

N,M = map(int, rl().split())

didntHear = set()
didntSee = set()

for i in range(N):
  didntHear.add(rl().strip())

for i in range(M):
  didntSee.add(rl().strip())

didntHearAndSee = list(didntHear & didntSee)

print(len(didntHearAndSee))
didntHearAndSee.sort()
for i in didntHearAndSee:
  print(i)
