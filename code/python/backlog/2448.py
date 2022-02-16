import sys
N = int(sys.stdin.readline())

#int((N / 3) * 5 + (N / 3 - 1))
arr = []
for _ in range(N):
  temp_arr = [' '] * int((N / 3) * 5 + (N / 3 - 1))
  arr.append(temp_arr)

def baseTri(x,y):
  arr[x][y - 1] = '*'
  arr[x][y + 1] = '*'
  arr[x - 1][y] = '*'
  for i in range(5):
    arr[x + 1][y + i - 2] = '*'


def printArr():
  for line in arr:
    for dot in line:
      print(dot, end='')

    print('\n', end='')

baseTri(1,2)

printArr()
