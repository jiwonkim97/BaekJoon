num = int(input())

for a in range(num):
    result=""
    i, str = input().split()
    for b in str:
        for c in range(int(i)):
            result += b
    print(result)