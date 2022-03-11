import copy
import sys

n, m = map(int, sys.stdin.readline().split())

def find(depth, selected):
  global m
  if depth == m:
    print(' '.join(map(str, selected)))

  for i in range(1, n+1):
    if not i in selected:
      find(depth + 1, selected + [i])


find(0,[])
