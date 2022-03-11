from collections import deque
import sys
N, K = map(int, sys.stdin.readline().split())

ground = [-1] * 100001

def find():
  global ground
  cnt = 0
  location = 0
  dq = deque([N])
  ground[N] = 0

  while dq:
    location = dq.popleft()
    if location == K:
      print(ground[location])
      break

    if location - 1 > -1:
      if ground[location - 1] == -1:
        ground[location - 1] = ground[location] + 1
        dq.append(location - 1)

    if location + 1 < 100001:
      if ground[location + 1] == -1:
        ground[location + 1] = ground[location] + 1
        dq.append(location + 1)

    if location * 2 < 100001:
      if ground[location * 2] == -1:
        ground[location * 2] = ground[location] + 1
        dq.append(location * 2)

    cnt += 1

find()
