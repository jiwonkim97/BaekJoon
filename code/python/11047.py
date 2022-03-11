import sys; rl = sys.stdin.readline

N, K = map(int, rl().split())

coins = [int(rl()) for _ in range(N)]
coins.reverse()

cnt = 0
for i in range(len(coins)):
  if K == 0:
    break
  if coins[i] <= K:
    cnt += K // coins[i]
    K = K % coins[i]
print(cnt)
