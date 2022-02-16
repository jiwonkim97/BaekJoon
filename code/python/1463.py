import sys

N = int(sys.stdin.readline())

arr = [0] * (N+1)

if N < 4:
  if N==1:
    print(0)

  if (N == 2 or N == 3):
    print(1)

else:
  arr[1] = 0
  arr[2] = 1
  arr[3] = 1

  for i in range(4, N + 1):
    a = b = c = float('inf')

    if(i % 3 == 0):
      a = arr[int(i/3)]
    if(i % 2 == 0):
      b = arr[int(i/2)]
    c = arr[i-1]

    arr[i] = min(a,b,c) + 1

  print(arr[i])
