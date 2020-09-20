/***
 * This problem was asked by Amazon.

There exists a staircase with N steps, and you can climb up either 1 or 2 steps at a time. Given N, write a function that returns the number of unique ways you can climb the staircase. The order of the steps matters.

For example, if N is 4, then there are 5 unique ways:

1, 1, 1, 1
2, 1, 1
1, 2, 1
1, 1, 2
2, 2
What if, instead of being able to climb 1 or 2 steps at a time, you could climb any number from a set of positive integers X? For example, if X = {1, 3, 5}, you could climb 1, 3, or 5 steps at a time.
 */


let X = [1, 3, 5];
let n = 4;


// N =      0 1 2 3 4 5  6
// Ways =   1 1 2 3 5 8 13

let staircase = (n, X) => {

    let setX = new Set(X)
    let cache = Array(n + 1).fill(0);
    cache[0] = 1;

    for (let i = 0; i <= n; ++i) {

        let temp = 0;
        for (let x of X) {
            if (i - x > 0) {
                temp += cache[i - x]
            }
        }
        cache[i] += temp;
        cache[i] += setX.has(i) ? 1 : 0;
    }

    return cache.pop();
}

console.log(staircase(n, X))
