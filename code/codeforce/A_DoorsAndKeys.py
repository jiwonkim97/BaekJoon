import sys
N = int(sys.stdin.readline())
testcases = list(sys.stdin.readline().rstrip() for _ in range(N))

keys = ['r','g','b']
doors = ['R','G','B']


def test(case):
  key = {'r': 0 , 'g': 0, 'b': 0}

  for s in case:
    if s in keys:
      key[s] += 1

    if s in doors:
      if key[s.lower()] == 0:
        print('NO')
        return

  print("YES")

for testcase in testcases:
  test(testcase)
