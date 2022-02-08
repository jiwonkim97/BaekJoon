from collections import deque

a = input().split()
N = int(a[0])
K = int(a[1])

queue = deque(range(N))

s = "<"
index = K - 1
arr = []

while(len(queue) > 1):
    while(index >= len(queue)):
        index -= len(queue)
        
    target = queue[index]
    s += str(target + 1) + ", "
    queue.remove(target)
    index -= 1
    index += K
    
print(s + str(queue[0] + 1) + '>')