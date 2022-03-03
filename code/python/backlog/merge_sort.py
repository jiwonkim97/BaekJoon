import math


def merge(left_arr, right_arr):
  #print("left_arr : ", left_arr)
  #print("right_arr : ", right_arr)
  lIter , rIter = 0, 0
  merged = []

  while lIter < len(left_arr) and rIter < len(right_arr):
    if left_arr[lIter] < right_arr[rIter]:
      print(left_arr[lIter])
      merged.append(left_arr[lIter])
      lIter += 1
    else:
      print(right_arr[rIter])
      merged.append(right_arr[rIter])
      rIter += 1

  if lIter < len(left_arr):
    while lIter < len(left_arr):
      print(left_arr[lIter])
      merged.append(left_arr[lIter])
      lIter += 1

  if rIter < len(right_arr):
    while rIter < len(right_arr):
      print(right_arr[rIter])
      merged.append(right_arr[rIter])
      rIter += 1
  print()
  return merged


def mergeSort(arr):
  if len(arr) > 1:
    mid = math.ceil(len(arr) / 2)
    left_arr = mergeSort(arr[0:mid])
    right_arr = mergeSort(arr[mid:len(arr)])

    return merge(left_arr, right_arr)
  return arr


arr = [4,5,1,3,2]
print(arr)
print(mergeSort(arr))
