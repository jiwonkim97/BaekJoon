import sys

n, m = map(int, sys.stdin.readline().split())

def find(depth, selected):
  if depth == m:
    print(' '.join(map(str, selected)))
    return
  if len(selected) == 0:
    k = 1
  else:
    k = selected[len(selected) - 1]
  for i in range(k, n+1):
    find(depth + 1, selected + [i])


find(0,[])
