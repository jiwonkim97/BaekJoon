n = int(input())

factos = [1] + [0] * n

for i in range(1, n + 1):
  factos[i] = factos[i-1] * i

i = factos[n]

cnt = 0
while i % 10 == 0:
  cnt += 1
  i = i//10
print(cnt)
