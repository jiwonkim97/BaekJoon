n = int(input())

dp_table = [[0] + [1] * 9]
if n == 1:
  print(sum(dp_table[0]))
  exit(0)

for i in range(1, n):
  temp_table = [0] * 10
  for j in range(10):
    if j != 0:
      temp_table[j] += (dp_table[i-1][j-1]) % int(1e9)
    if j != 9:
      temp_table[j] += (dp_table[i-1][j+1]) % int(1e9)
  dp_table.append(temp_table)

print((sum(dp_table.pop())) % int(1e9))
