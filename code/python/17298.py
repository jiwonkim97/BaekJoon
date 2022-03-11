import sys; rl = sys.stdin.readline

N = int(rl())
arr = list(map(int, rl().split()))
ans = [-1] * N
stack = []

num = 1000001

for i in range(len(arr)):
  if arr[i] <= num:
    stack.append([arr[i], i])
    num = arr[i]
  else:
    while stack and stack[len(stack) - 1][0] < arr[i]:
      popped = stack.pop()
      ans[popped[1]] = arr[i]

    num = arr[i]
    stack.append([num, i])


print(' '.join(map(str, ans)))
