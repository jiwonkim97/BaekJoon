n = input()
l = []

for s in n:
  l.append(s)

l.sort(reverse = True)
print(''.join(l))
