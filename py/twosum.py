from typing import List

class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        mins =  list(filter(lambda x: (target-x) in nums, nums ))
        one = mins[0]
        two = list(filter(lambda x: x+one == target , mins ))[0]
        return [nums.index(one), nums.index(two)]


print( Solution().twoSum([2,7,14,15], 9))