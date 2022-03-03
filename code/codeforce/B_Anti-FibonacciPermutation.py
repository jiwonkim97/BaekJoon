import sys, copy

t = int(sys.stdin.readline())

testcases = list(int(sys.stdin.readline()) for _ in range(t))

cnt = 0
flag = False

def check(limit, level, arr, visited):
  global cnt , flag
  if flag:
    return

  if limit == level:
    cnt += 1
    print(' '.join(list(str(x) for x in arr)))
    if cnt == limit:
      flag = True
    return

  for i in range(limit):
    if not visited[i]:
      if level > 1:
        if arr[level - 1] + arr[level - 2] == i + 1:
          return

      newArr = copy.deepcopy(arr)
      newArr[level] = i + 1
      newVisited = copy.deepcopy(visited)
      newVisited[i] = True
      check(limit, level + 1, newArr, newVisited)

for testcase in testcases:
  cnt = 0
  flag = False
  for i in range(testcase):
    arr = [0 for _ in range(testcase)]
    visited = [False for _ in range(testcase)]
    arr[0] = i + 1
    visited[i] = True
    check(testcase, 1, arr, visited)


"""
def check(limit, level, arr, visited):
  if limit == level:
    print(arr)
    return

  if level < 3:
    for i in range(1, limit + 1):
      if not visited[i]:
        newArr = copy.deepcopy(arr)
        newArr[level] = i
        newVisited = copy.deepcopy(visited)
        newVisited[i] = True
        check(limit, level + 1, newArr, newVisited)
  else:
    for i in range(1, limit + 1):
      if not visited[i]:
        if arr[len(arr) - 1] + arr[len(arr) - 2] != i:
          newArr = copy.deepcopy(arr)
          newArr[level] = i
          newVisited = copy.deepcopy(visited)
          newVisited[i] = True
          check(limit, level + 1, newArr, newVisited)
"""
