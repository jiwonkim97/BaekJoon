import sys

num = int(sys.stdin.readline())
pairNum = int(sys.stdin.readline())
pairs = []
for _ in range(pairNum):
  pairs.append( list(map( int, sys.stdin.readline().rstrip().split() )) )

graph = []
for _ in range(num):
  graph.append([0]*num)

for pair in pairs:
  graph[pair[0]-1][pair[1]-1] = 1
  graph[pair[1]-1][pair[0]-1] = 1

cnt = 0

visit = [False] * num
def search(n):
  global visit, graph, cnt
  visit[n] = True
  for i in range(num):
    if(graph[n][i] == 1 and not visit[i]):
      cnt+=1
      search(i)

search(0)
print(cnt)
