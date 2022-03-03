import sys

n,m = map(int,sys.stdin.readline().split())
arr = list(map(int, sys.stdin.readline().split()))

def Q(i,j,k):
  a = arr[i-1:j]
  a.sort()
  print(a[k-1])

for _ in range(m):
  i,j,k = map(int, sys.stdin.readline().split())
  Q(i,j,k)
