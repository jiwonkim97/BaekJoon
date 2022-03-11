from collections import deque
import sys; rl = sys.stdin.readline
import copy

N = int(rl())
Ns = deque(list(map(int, rl().split())))
opers = list(map(int, rl().split()))
res = []

def calc(oper, n1, n2):
  if oper == 0:
    return int(n1 + n2)
  if oper == 1:
    return int(n1 - n2)
  if oper == 2:
    return int(n1 * n2)
  if oper == 3:
    if n1 < 0:
      return int(-1 * ((-1 * n1) // n2))
    else:
      return int(n1 // n2)


def find(opers, Ns):
  if opers == [0,0,0,0]:
    res.append(Ns[0])
    return

  for i in range(4):
    if opers[i] == 0:
      continue
    tempNs = copy.deepcopy(Ns)
    tempOpers = copy.deepcopy(opers)
    n1 = tempNs.popleft()
    n2 = tempNs.popleft()
    tempNs.appendleft(calc(i, n1, n2))
    tempOpers[i] -= 1
    find(tempOpers, tempNs)


find(copy.deepcopy(opers), copy.deepcopy(Ns))
print(max(res))
print(min(res))
