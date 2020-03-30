"""
Given an array nums of n integers and an integer target, find three integers in nums such that the sum is closest to target. Return the sum of the three integers. You may assume that each input would have exactly one solution.

Example:

Given array nums = [-1, 2, 1, -4], and target = 1.

The sum that is closest to the target is 2. (-1 + 2 + 1 = 2)
"""
from itertools import combinations
from functools import reduce


def sum(t):
    return reduce(lambda a, b: a+b, t)


def threeSumCloset(arr, target):
    comb = combinations(arr, 3)
    m = map(sum, comb)
    for e in m:
        
       

print(threeSumCloset([-1, 2, 1, -4], 1))
