

/**
 *
 *  Given an array of numbers and an index i, return the index of the nearest larger number
 * of the number at index i, where distance is measured in array indices.

 * For example, given [4, 1, 3, 5, 6] and index 0, you should return 3.

 * If two distances to larger numbers are the equal, then return any one of them.
 * If the  array  at i doesn't have a nearest larger integer, then return null.

 * Follow-up: If you can preprocess the array, can you do this in constant time?
 *
 *
 */


function dynamic() {

    let cache = new Map();
    let ant_arr = [];
    let iter = 0;


    // two points patterns
    const findNearestLarger = (idx, arr) => {
        const minVal = arr[idx], len = arr.length;
        var down = idx;
        while (++idx < len || --down >= 0) {
            ++iter;
            if (idx < len && arr[idx] > minVal) { return idx }
            if (down >= 0 && arr[down] > minVal) { return down }
        }
        return null;
    }


    return function nearestLarger(idx, arr) {
        iter = 0;
        if (JSON.stringify(ant_arr) === JSON.stringify(arr)) {
            console.log('Iteraciones: ', iter, ant_arr)
            return cache.get(idx);
        } else {

            // Update new array first time 
            ant_arr = arr;

            //Preprocesing
            for (let i = 0; i < ant_arr.length; i++) {
                cache.set(i, findNearestLarger(i, ant_arr));
                ++iter;
            }
            console.log('Iteraciones: ', iter, ant_arr)

            return cache.get(idx);
        }

    }
}


let arr = [4, 1, 3, 5, 6];
let idx = 0; // you should return 3.

let fastNearestLarger = dynamic();

console.log(fastNearestLarger(0, [4, 1, 3, 5, 6])); // return index 3; 15 iter first

console.log(fastNearestLarger(3, [7, 8, 3, 6, 4, 2, 5])); // return index 1; 26 iter first

console.log(fastNearestLarger(1, [8, 9, 2, 3, 4, 6, 5])); // return index null; 23 iter first
console.log(fastNearestLarger(3, [8, 9, 2, 3, 4, 6, 5])); // return index 4; 0 iter second
console.log(fastNearestLarger(0, [8, 9, 2, 3, 4, 6, 5])); // return index 4; 0 iter third

