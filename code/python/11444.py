n = int(input())
fibo = [0] + [1] * n

for i in range(2, n + 1):
  fibo[i] = fibo[i-1] + fibo[i-2]
