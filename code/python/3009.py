import sys; rl = sys.stdin.readline

points = []

for _ in range(3):
  points.append(list(map(int, rl().split())))

x = []
y = []

for point in points:
  if point[0] in x:
    x.remove(point[0])
  else:
    x.append(point[0])

  if point[1] in y:
    y.remove(point[1])
  else:
    y.append(point[1])

print(x[0], y[0])
