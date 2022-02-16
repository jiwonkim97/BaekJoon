import sys

N = int(sys.stdin.readline())
k = int(sys.stdin.readline())

def binarySearch(N,arr):
  first = 0
  last = len(arr) - 1

  while(True):
    range_length = last - first
    mid_index = first + range_length // 2
    mid_element = arr[mid_index]

    if(mid_element == N):
      return mid_index
    else:
      if(mid_element > N):
        last -= range_length // 2
      else:
        first += range_length // 2

    if(range_length == 1):
      return -1

test_arr = [x for x in range(50)]
print(test_arr)
print(binarySearch(50,test_arr))
