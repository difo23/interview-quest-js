

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

    // Pattern: Two Pointers
    const findNearestLarger = (idx, arr) => {

        const value = arr[idx], len = arr.length;

        //Two pointers start with the same value
        let [down, up] = [idx, idx]
        let resultIdx = null;

        while (up < len || down >= 0) {

            //  If two distances to larger numbers are the equal, 
            // then return any one of them.
            ++up;
            --down;
            if (down >= 0 && arr[down] > value) { return down }
            if (up < len && arr[up] > value) { return up }
        }

        // If the  array  at i doesn't have a nearest larger integer,
        // then return null.

        return null;
    }


    return function nearestLarger(idx, arr) {


        // Compare previous arr with new arr received
        if (JSON.stringify(ant_arr) === JSON.stringify(arr)) {
            //Follow-up: If you can preprocess the array,
            // can you do this in constant time?
            return cache.get(idx);
        } else {

            // Update the new matrix for the first time
            ant_arr = arr;

            //Preprocessing
            for (let i = 0; i < ant_arr.length; i++) {
                cache.set(i, findNearestLarger(i, ant_arr));
            }

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
console.log(fastNearestLarger(2, [8, 9, 2, 3, 4, 6, 5])); // return index 1; 0 iter second
console.log(fastNearestLarger(0, [8, 9, 2, 3, 4, 6, 5])); // return index 4; 0 iter third

