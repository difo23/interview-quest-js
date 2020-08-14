'''
    14/08/2020
    Hi, here's your problem today. This problem was recently asked by AirBNB:

    Given a list of sorted numbers, and two integers k and x, find k closest numbers to the pivot x.

    Here's an example and some starter code:

    def closest_nums(nums, k, x):
    # Fill this in.
    
    print(closest_nums([1, 3, 7, 8, 9], 3, 5))
    # [7, 3, 8] 
'''

from math import inf


def kClosest(nums, k, x):
    result = {}
    suma = 0
    min_sum = inf

    for (i, value) in enumerate(nums):
        suma += abs(value - x)

        if(i >= k-1):
            min_sum = min(suma, min_sum)
            result.setdefault(suma, nums[i-(k-1):i+1])
            suma -= abs(nums[i-(k-1)] - x)

    return result.get(min_sum)


print(kClosest([1, 3, 7, 8, 9], 3, 5))
