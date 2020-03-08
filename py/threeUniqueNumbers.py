"""
    Given a list of numbers with only 3 unique numbers (1, 2, 3), sort the list in O(n) time.

    Example 1:
        Input: [3, 3, 2, 1, 3, 2, 1]
        Output: [1, 1, 2, 2, 3, 3, 3]
"""


def sortThreeUniqueNumber(nums):
    # Creo una lista con 3 listas internas.
    arr = [[],  [], []]

    # los numeros quedan ordenados O(n)
    for num in nums:
        arr[num-1].append(num)

    # transformo las listas en una sola lista.
    result = [*arr[0], *arr[1], *arr[2]]

    return result


print(sortThreeUniqueNumber([3, 3, 2, 1, 3, 2, 1]))
