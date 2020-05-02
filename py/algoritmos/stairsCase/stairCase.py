


def stairCase(n, X):
    
    cache = [0 for _ in range(n + 1)] # Creo arreglo con 0s
    cache[0] = 1 # el primer elemeto del arreglo lo completo con 1

    for i in range(n + 1):
        cache[i] += sum(cache[i - x] for x in X if i - x > 0)
        cache[i] += 1 if i in X else 0
    return cache[-1]


print(stairCase(1,[0,2]))