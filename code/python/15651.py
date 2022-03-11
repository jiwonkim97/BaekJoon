import sys

n, m = map(int, sys.stdin.readline().split())

def find(depth, selected):
  if depth == m:
    print(' '.join(map(str, selected)))
    return

  for i in range(1, n+1):
    find(depth + 1, selected + [i])


find(0,[])
