import sys; rl = sys.stdin.readline

N, M = map(int, rl().split())

styles = list(list(rl().split()) for _ in range(N))
characters = list(int(rl()) for _ in range(M))

styles = list([style[0], int(style[1])] for style in styles)
styles.sort(key=lambda x: x[1])

i = 1
target = styles[0]
if N == 1:
  i = -1

while i != -1:
  print(styles[i])
  if styles[i][1] == target[1]:
    styles.remove(styles[i])
  else:
    target = styles[i]
    i += 1
  print(i, len(styles))
  if i >= len(styles):
    i = -1

N = len(styles)

def findpower(character):
  start, end = 0, N - 1
  mid = (start + end) // 2

  while start <= end:


for character in characters:
  findpower(character)

print(styles)
print(characters)
