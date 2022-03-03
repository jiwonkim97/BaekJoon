import sys

a,b,c = map(int, sys.stdin.readline().split())

if a==b or a==c or b==c:
  if a==b==c:
    print(10000 + a * 1000)
  else:
    if a==b:
      print(1000 + a * 100)
    else:
      print(1000 + c * 100)
else:
  print(max(a,b,c) * 100)
