import sys
a = int(sys.stdin.readline())
b = sys.stdin.readline().rstrip()
l = list()
for i in b:
  l.append(a*int(i))
for _ in range(len(b)):
  print(l.pop())
print(a*int(b))
