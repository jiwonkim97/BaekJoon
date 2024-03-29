n = int(input())

if n < 4:
  print(n)
  exit(0)

arr = [0] * (n + 1)
for i in range(4):
  arr[i] = i

for i in range(4, n + 1):
  arr[i] = (arr[i-1] + arr[i-2]) % 15746

print(arr[n])

# N=1 # 1 => 1개
# N=2 # 00, 11  => 2개
# N=3 # 001, 100, 111 => 3개
# N=4 # 0000, 0011, 1001, 1100, 1111  => 5개
# N=5 # 00001, 00100, 10000, 00111, 10011, 11001, 11100, 11111  => 8개
# N=6 # 000000, 000011, 001100, 001001, 100001, 100100, 110000, 001111, 100111, 110011, 111001, 111100, 111111  => 13개
