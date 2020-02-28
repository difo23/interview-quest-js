# A Python3 program to sort a 
# nearly sorted array. 
  
from heapq import heappop, heappush, heapify 
  
# A utility function to print  
# array elements 
def print_array(arr: list): 
    for elem in arr: 
        print(elem, end = ' ') 
  
# Given an array of size n, where every   
# element is k away from its target  
# position, sorts the array in O(nLogk) time. 
def sort_k(arr: list, n: int, k: int): 
    """ 
    :param arr: input array 
    :param n: length of the array 
    :param k: max distance, which every  
     element is away from its target position. 
    :return: None 
    """
    # List of first k+1 items 
    heap = arr[:k + 1] 
  
    # using heapify to convert list  
    # into heap(or min heap) 
    heapify(heap) 
  
    # "rem_elmnts_index" is index for remaining  
    # elements in arr and "target_index" is  
    # target index of for current minimum element  
    # in Min Heap "heap". 
    target_index = 0
    for rem_elmnts_index in range(k + 1, n): 
        arr[target_index] = heappop(heap) 
        heappush(heap, arr[rem_elmnts_index]) 
        target_index += 1
  
    while heap: 
        arr[target_index] = heappop(heap) 
        target_index += 1
  
# Driver Code 
k = 3
arr = [ 6,2,  3, 1, 4, 5] 
n = len(arr) 
sort_k(arr, n, k) 
  
print('Following is sorted array') 
print_array(arr) 
  
# This code is contributed by  
# Veerat Beri(viratberi) 