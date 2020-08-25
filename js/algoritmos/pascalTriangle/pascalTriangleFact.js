// Construir el triango de pascal usando el factorial.

// Function factorial recursive

// factorial de 4! =  4*3*2*1*0!
// 0! = 1


//Dynamic Programing factorial
function factorialDynamic() {

    let cache = new Map();

    return function factorial(n) {
        if (cache.has(n)) {
            return cache.get(n)
        } else {
            if (n <= 1) return 1;
            cache.set(n, n * factorial(n - 1));
            return cache.get(n);
        }

    }

}
const factorial = factorialDynamic();

// Function (P Q) = P! / (Q!-(P-Q)!)

function combinatorial(p, q) {
    return (factorial(p) / (factorial(q) * factorial(p - q)));
}

// fila          (p q)
// 0             (0 0)
// 1        (1 0) (1 1)
// 2    (2 0) (2 1) (2 2)
// 3 (3 0) (3 1) (3 2) (3 3)


function row(p) {

    let row = [];

    for (let q = 0; q <= p; ++q) {
        row.push(combinatorial(p, q));
    }
    return row;

}

function trianglePascal(rows) {

    let triangle = [];

    for (let p = 0; p < rows; ++p) {
        triangle.push(row(p))
    }
    return triangle;
}

function print(triangle) {

    for (let row of triangle) {
        console.log(row);
    }
}



print(trianglePascal(15));