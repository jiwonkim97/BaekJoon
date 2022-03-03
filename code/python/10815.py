import sys; rl = sys.stdin.readline

N = int(rl())
cards = list(map(int, rl().split()))
M = int(rl())
targets = list(map(int, rl().split()))

cards.sort()

def binarySearch(num):
  global N,M
  start, end = 0, N-1
  mid = (start + end) // 2

  while(start <= end):
    if cards[mid] == num:
      return 1
    if cards[mid] < num:
      start = mid + 1
    else:
      end = mid - 1
    mid = (start + end) // 2

  return 0

for target in targets:
  print(binarySearch(target), end = ' ')
