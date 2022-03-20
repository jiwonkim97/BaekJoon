import sys; rl = sys.stdin.readline
N = int(rl())
soldTickets = list(map(int, rl().split()))

dic = {}
for ticket in soldTickets:
  dic[ticket] = 1

for i in range(1, 2**31):
  if i not in dic:
    print(i)
    exit(0)
