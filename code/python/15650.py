import sys

n, m = map(int, sys.stdin.readline().split())

def find(depth, selected):
  global m
  if depth == m:
    print(' '.join(map(str, selected)))

  if len(selected) == 0:
    k = 0
  else:
    k = selected[len(selected) - 1]
  for i in range(k + 1, n+1):
    if not i in selected:
      find(depth + 1, selected + [i])


find(0,[])
