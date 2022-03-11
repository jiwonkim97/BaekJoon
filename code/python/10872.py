import sys
n = int(sys.stdin.readline())

def facto(i):
  if i == 0 or i == 1:
    return 1

  return i * facto(i-1)

print(facto(n))
