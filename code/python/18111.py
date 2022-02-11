import sys
N,M,B = map(int,sys.stdin.readline().split())

def check(arr, B, H):
    t = 0
    blocks = B
    for i in arr:
        blocks += i-H
        if(H > i):
            t += H-i
        else:
            t += 2*(i-H)
    if(blocks < 0):
        return -1

    return t

arr = []
for _ in range(N):
    arr+=list(map(int,sys.stdin.readline().split()))

Min = min(arr)
Max = max(arr)

time = 128000001
height = -1

for i in range(Min,Max + 1):
    res = check(arr,B,i)

    if(res != -1 and time >= res):
        time = res
        height = i

print(time,height)
