
/*
    14/08/2020
    Hi, here's your problem today. This problem was recently asked by AirBNB:

    Given a list of sorted numbers, and two integers k and x, find k closest numbers to the pivot x.

    Here's an example and some starter code:

    def closest_nums(nums, k, x):
    # Fill this in.
    
    print(closest_nums([1, 3, 7, 8, 9], 3, 5))
    # [7, 3, 8] 
*/




const kClosest = (nums, k, x) => {
    //Given a list of "sorted" numbers
    let result = {},
        sum = 0,
        min_sum = Infinity;

    for (let i = 0; i < nums.length; i++) {
        sum += Math.abs(nums[i] - x);
        if (i >= k - 1) {
            min_sum = Math.min(sum, min_sum);
            result[sum] = nums.slice(i - (k - 1), i + 1);
            sum -= Math.abs(nums[i - (k - 1)] - x);
        }
    }

    return result[min_sum];
}


const nums = [0, 1, 4, 7, 9, 2],
    k = 4,
    x = 5;

console.log(kClosest(nums, k, x));


