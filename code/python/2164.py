from collections import deque

a = int(input())
arr=[]

for i in range(a):
    arr.append(a-i)
    
queue = deque(arr)

while(len(queue) > 1):
    queue.pop()
    queue.insert(0,queue.pop())
    
print(queue[0])