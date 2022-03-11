from collections import deque
import sys ; rl = sys.stdin.readline

n = int(rl())
words = []
for _ in range(n):
  words.append(rl().rstrip())

def check(word):
  l = []
  dq = deque(word)
  while dq:
    temp = dq.popleft()
    if temp in l:
      return 0
    else:
      l.append(temp)
      while dq and dq[0] == temp:
        dq.popleft()

  return 1

cnt = 0
for word in words:
  cnt += check(word)
print(cnt)
