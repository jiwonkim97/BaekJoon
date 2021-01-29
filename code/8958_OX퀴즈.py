for i in range(int(input())):
    result = 0
    score = 1
    for k in input():
        if(k == "O"):
            result += score
            score += 1
        else:
            score = 1
    print(result)