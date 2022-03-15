import sys; rl = sys.stdin.readline

N = int(rl())
roadLen = list(map(int, rl().split()))
prices = list(map(int, rl().split()))
cost = 0

for i in range(len(roadLen)):
  if prices[i] < prices[i+1]:
    prices[i+1] = prices[i]
  cost += roadLen[i] * prices[i]

print(cost)
