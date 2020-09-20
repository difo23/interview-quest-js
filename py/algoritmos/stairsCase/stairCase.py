
# def countWays(n, m):

#     temp = 0
#     res = [1]

#     for i in range(1, n + 1):
#         s = i - m - 1
#         e = i - 1
#         if (s >= 0):
#             temp -= res[s]
#         temp += res[e]
#         res.append(temp)

#     return res[n]


# # Driver Code
# n = 3
# m = 2

# print('Number of ways =', countWays(n, m))



def stairCase(n, X):

    cache = [0 for _ in range(n + 1)] # Creo arreglo con 0s
    cache[0] = 1 # el primer elemeto del arreglo lo completo con 1

    for i in range(n + 1):
        cache[i] += sum(cache[i - x] for x in X if i - x > 0)
        cache[i] += 1 if i in X else 0
    return cache[-1]


print(stairCase(4,[1,3, 5]))