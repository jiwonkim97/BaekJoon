import sys; rl = sys.stdin.readline
N = int(rl())
A = list(map(int, rl().split()))

incr_table = [1] * N
desc_table = [1] * N

for i in range(N):
  for j in range(i):
    if A[j] < A[i]:
      incr_table[i] = max(incr_table[i], incr_table[j] + 1)

A.reverse()
for i in range(N):
  for j in range(i):
    if A[j] < A[i]:
      desc_table[i] = max(desc_table[i], desc_table[j] + 1)
desc_table.reverse()

dp_table = [incr_table[x] + desc_table[x] - 1 for x in range(N)]
# print(incr_table)
# print(desc_table)
# print(dp_table)
print(max(dp_table))


# dp_table = [[1, False]] # True, False 는 해당 인덱스에서의 부분 수열 중 최장 바이토닉 수열이 고점을 찍고 꺾였는지를 저장

# for i in range(1, N):
#   flag = True
#   candidate = [dp_table[i-1][0]]
#   if A[i] < A[i-1]: #and dp_table[i-1][1] == True:
#     candidate.append(dp_table[i-1][0] + 1)
#     flag = True
#   if A[i] > A[i-1] and dp_table[i-1][1] == False:
#     candidate.append(dp_table[i-1][0] + 1)
#     flag = False

#   if max(candidate) == dp_table[i-1][0]:
#     flag = dp_table[i-1][1]
#   dp_table.append([max(candidate), flag])

# print(dp_table)
