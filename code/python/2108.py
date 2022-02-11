import sys
from collections import Counter
N = int(sys.stdin.readline())
nums = [int(sys.stdin.readline()) for _ in range(N)]

print(round(sum(x for x in nums) / N))

nums.sort()
print(nums[int(N/2)])

commons = Counter(nums).most_common(2)
if(len(commons) < 2):
    print(commons[0][0])
else:
    if(commons[0][1] == commons[1][1]):
        print(commons[1][0])
    else:
        print(commons[0][0])

print(nums[N-1] - nums[0])
