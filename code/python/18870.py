import copy
import sys; rl = sys.stdin.readline

n = int(rl())
xs = list(map(int, rl().split()))
keys = []
dic = {}

keys = copy.deepcopy(xs)
keys.sort()

cnt = 0
for i in range(len(keys)):
  if keys[i] in dic:
    cnt += 1
    continue
  else:
    dic[keys[i]] = i - cnt

for x in xs:
  print(dic[x], end = ' ')
