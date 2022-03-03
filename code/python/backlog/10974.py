import math
import sys

N = int(sys.stdin.readline())

result = []

def find(i):
  visited[i] = True
  ans = []
  ans.append(i + 1)
  for j in range(N):
    if not visited[j]:
      ans = ans + find(j)

  return ans

for i in range(N):
  visited = [False] * N
  result.append(find(i))

print(result)

"""
arr = [0] * (int(math.pow(N,N)) + 2)

for i in range(N):
  arr[int(math.pow(2,i))] = i+1

visited = []
res = []

print(arr)

def search():
  return
"""
