n = int(input())
fibo = [1] * (n + 1)

for i in range(2, n+1):
  fibo[i] = (fibo[i - 1] + fibo[i-2]) % 10007

print(fibo[n])
