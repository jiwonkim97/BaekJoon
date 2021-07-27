a,b,c,d,e = input().split()
output = 0

for char in [a,b,c,d,e]:
    output += int(char)*int(char)
output %=10

print(output)