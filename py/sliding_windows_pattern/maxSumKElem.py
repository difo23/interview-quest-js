'''
Given an array of integers of size ‘n’.
Our aim is to calculate the maximum sum possible for ‘k’ consecutive elements in the array.

Input  : arr[] = {100, 200, 300, 400}
         k = 2
Output : 700
'''


#BRUTE FORCE : iterate through all windows of size k

arr = [700, 200, 300, 400, 600, 100, 800]
k = 2

def maxSumKElement(arr, k):
    max_sum = 0
    # Hago un recorrido desde 0 a len(arr) - k + 1, ( 4 -2 + 1) par limitar el recorrido
    for i in range(len(arr)-k+1):   
        current_sum = 0
        # Recorrido anidado de 0 a k, (2)
        for j in range(k):        
            current_sum = current_sum + arr[i+j]         
        max_sum = max(current_sum, max_sum) 
    return max_sum


print( maxSumKElement(arr, k))


#SLIDING WINDOW

def maxSumKElementSlibingWindows(arr, k):
    max_sum = 0
    window_sum = 0

    # calculate sum of 1st window
    for i in range(k):  window_sum += arr[i] 

    #slide window from start to end in array.
    # desde k hasta len(arr), 
    for i in range(k, len(arr)):
        window_sum += arr[i] - arr[i-k];    # saving re-computation
        max_sum = max(max_sum, window_sum)
    return max_sum

print(maxSumKElementSlibingWindows(arr, k))



# SLING WINDOW WITH FILTER AND REDUCE

def maxSumKElementFilterReduce(arr, k):
    for i in range()
    slice_window = slice(k, len(arr))
    print(arr[slice_window])



maxSumKElementFilterReduce(arr, k)
