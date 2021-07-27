arr = list()
for i in range(9):
    arr.append(int(input()))
i = 0
max = 0

for num in range(len(arr)):
    if(max < arr[num]):
        max = arr[num]
        i = num + 1
print(max)
print(i)