# Algoritmos para Entrevistas.

## Estrategias para solución de algoritmos:

### Estrategia #1 Sliding Windows. 
Por Lizandro Ramírez.

#### Introducción:

Estos ejercicios que presentaremos a continuación se fundamentan en la estrategia Slinding Windows. Esta se aplica a problemas donde sea necesario recorrer una lista de elementos en donde tengas que buscar o calcular algo a partir de sub arreglos con elementos consecutivos de un tamaño k elementos.


#### Escenario de pruebas:

Dado un arreglo, encuentra el promedio de todos los sub arreglos de tamaño k.

Input: arr = [1, 3, 2, 6, -1, 4, 1, 8, 2];  k= 5
Output: [ 2.2, 2.8, 2.4, 3.6, 2.8]

Este problema puede tener varias soluciones posibles que pueden ser validas,  en esta introducción tomaremos dos soluciones posibles, una solución que no sigue ninguna estrategia en particular que le llamaremos fuerza bruta (FB) y otra solución que si sigue una estrategia en este caso Sliding Windows (SW). Con estas dos estrategias vamos a resaltar la importancia de tener un plan a seguir bien pensado para resolver este tipo de problemas. 


#### Problema (fácil): Promedio de sub arreglos de tamaño k.
Estrategia de Fuerza Bruta:

La primera idea que nos llega a la mente para resolver este problema, es usar ciclos anidados. El primer ciclo recorre los elementos del arreglo desde el índice 0 hasta  (tamaño del arreglo - k)+1. El ciclo anidado  recorre los elementos con una relación de k, haciendo las operaciones correspondientes para obtener el promedio.
![Problema 1](https://lh4.googleusercontent.com/Ma5kaP-NAVe7Bf7iXTER0na9k-vZae6szDWfUfzGdRG9MMXx6F_RFh7OzNq3OcVVR0yUksYaUpo7MBg8UfQ8eO-o985CekQkxwr2HZ0PmJ8HSJHPaiUNJVxjvfDs-Qs1HGsoDwra)



Esta estrategia nos arroja que para un n = 9  tendremos 25 operaciones,  para el escenario de pruebas anterior, claramente la O(n*m) es la big O que representa esta solución donde m representa él (tamaño del arreglo -k) y  m el tamaño del sub arreglo k. En definitiva se puede decir que es un O(n²) algo que no resulta ser una solución muy eficiente.

#### Estrategia de Slinding Window:

En la siguiente solución implementamos la estrategia de sliding windows, esta estrategia busca eliminar el ciclo interno  de la solución presentada por fuerza bruta. La idea principal se basa en ir sacando el último elemento de la ventana  y agregando el siguiente, solo hay que tener en consideración los índices de los elementos a sacar cuando el arreglo ha recorrido el tamaño de k en adelante.
![Problema 1](https://lh3.googleusercontent.com/acgmALBsJEokk6bwltWsTKCyIPvkw-wxrjUvJC4oXeehkd1bU4V2HPOZwoz7MtwvxQ8IDbubqdUuCVj66SRf3f4sKcMUc709ethmQzB2)


El centro de la estrategia esta en esta parte del código, en donde se realiza la salida de un elemento desde que i alcanza el valor de k:

![Problema 1](https://lh5.googleusercontent.com/BcseciTB7NzPLTYVomsm3pbltz5zv5hTvCFw1IfNe5yzjUFk1f8l__izz455zvfJFg3Jd-z0US2nbcLIpptHh9JMwwumAtY20l2IVrk)

En la solución usando la estrategia de sliding windows podemos notar que las operaciones se reducen a 5, siendo mucho menos operaciones que sin usar una estrategia. Los dos algoritmos llegan al mismo resultado pero su eficiencia es muy distinta. La big O de este algoritmo con la estrategia de Sliding Windows es O(n).

#### Debugger con el escenario de prueba:

En esta parte del proyecto es bueno aprender a usar las herramientas de debugger para visual studio code así pueden ver paso a paso como trabajan estos dos algoritmos. 

