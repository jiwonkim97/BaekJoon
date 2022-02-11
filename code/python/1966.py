import sys
from collections import deque

def printer(A,B):
    N = A[0]
    M = A[1]
    count = 0
    flag = True
    printerQueue = deque(B)
    Max = max(printerQueue)


    while(flag):
        temp = printerQueue[0]
        if(temp < Max):
            printerQueue.append(printerQueue.popleft())
            if(M == 0):
                M = len(printerQueue) - 1
            else:
                M -= 1
        else:
            count += 1
            if(M == 0):
                print(count)
                flag = False
            else:
                printerQueue.popleft()
                Max = max(printerQueue)
                M -= 1


a = int(sys.stdin.readline())


for _ in range(a):
    A = list(map(int,sys.stdin.readline().split()))
    B = list(map(int,sys.stdin.readline().split()))

    printer(A,B)
