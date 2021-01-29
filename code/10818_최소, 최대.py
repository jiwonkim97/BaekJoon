num = input()
num = int(num)

inList = input().split()

min = int(inList[0])
max = int(inList[0])

for i in inList:
    i = int(i)
    if(min > i):
        min = i
    if(max < i):
        max = i
print(min,max)