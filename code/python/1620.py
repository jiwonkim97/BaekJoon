import sys; rl = sys.stdin.readline

N, M = map(int, rl().split())

pokedex = {}

for i in range(1, N+1):
  name = rl().strip()
  pokedex[str(i)] = name
  pokedex[name] = i

for _ in range(M):
  target = rl().strip()
  print(pokedex[target])
