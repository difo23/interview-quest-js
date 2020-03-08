// FB para una O(n^²)

let maxSumFB = (nums, k ) => {
    
    let suma = 0;
    let max = 0;

    for (let i = 0; i < nums.length - k +1; ++i ){
        for(let j= 0; j < k; ++j){
            suma += nums[i+j]
        }
        max = Math.max(max, suma);
        suma = 0;
    }

    return max;

}

const nums = [3,4,5,6,7,2,1]; // length = 7
const k = 3; 
// resp 18
console.log(maxSumFB(nums, k));


// Solucion SW O(n)

let maxSumSW = (nums, k)=>{

    let suma = 0;
    let max = 0;
    let countSalida = 0;

    for (let i = 0 ; i < nums.length; ++i){
        suma += nums[i];

        if (i >= k-1){
            max = Math.max(suma, max);
            suma -= nums[countSalida];
            ++countSalida;
        }

    }
    return max;
}


console.log(maxSumSW(nums, k));