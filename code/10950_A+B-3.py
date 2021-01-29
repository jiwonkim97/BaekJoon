num = input()

num = int(num)
arr = list()

for i in range(num):
    a,b = map(int, input().split())
    arr.append(a+b)
    
for i in arr:
    print(i)