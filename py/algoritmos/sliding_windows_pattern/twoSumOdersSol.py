"""
Coding Patterns: Two Pointers
    With using the Two Pointers pattern, and Pointer 1 pointing to the beginning of the array and Pointer 2 pointing to the end of the array, we will check if the numbers pointed by the pointers add up to the target sum. 
"""

"""
LeetCode 1 - Two Sum [easy]

Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9, return [0, 1].

"""

#Solución Time complexity O(N), Space complexity O(1)
# Esta solucion solo funciona con arr ordenado.

def twoSum(arr, target ):
    izq = 0
    der = len(arr)-1

    while(izq < der):
        current_sum = arr[izq] + arr[der]
        if current_sum == target:
            return [izq, der]
        
        if target > current_sum:
            izq += 1 #necesito un par con una suma mayor
        else:
            der -= 1 #necesito un par con una suma menor

    return [-1, -1]


# Solucion 2 Hash Table, TC O(n) y SC O(n)

def twoSumHash (arr, target):
    #creo un diccionario, para guarda valor : index de arr
    num_map = {}
    # uso enumerate para recorrer los valores y el index de arr
    for i, num in enumerate(arr):
        #target = y + x, si existe un valor como key que sea igual a 
        # target-num  termino el recorrido 
        if target - num in num_map:
            return [num_map[target - num], i]
        else:
            # si target -num no esta en el arreglo guardo num como key 
            num_map[num] = i
    return [-1, -1]

print (twoSumHash([3, 2, 8,12, 8, 4], 7))

