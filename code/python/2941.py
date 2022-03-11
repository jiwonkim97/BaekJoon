kro = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z=']

word = input()

for i in kro:
    word = word.replace(i, 'k')

print(len(word))
