let nums = [ 3, 1, 4 ,1, 2 ];

let findDuplicNumber = (nums) => {
	return nums.find((num, i, nums) => nums.slice(i + 1, nums.length).includes(num));
};


//Algoritmo de floyd 

//console.log(findDuplicNumber(nums));
let fast = (nums) => {
    let t =  nums[0];
    let l =  nums[0];

    do {
        t = nums[t]; //3
        l = nums[nums[l]]; //2
    }while(t !== l)

    return {t, nums};
}

let slow = (props) => {
    let t = props.t;
    let l = props.nums[0];

    while (t !== l){
        t = props.nums[t];
        l = props.nums[l];
    }

    return t;
}



let findDuplicNumberFloyd = (nums) => {

    if (!nums.length) return nums;
    const floyd = slow(fast(nums));
    return floyd;
}


console.log(findDuplicNumberFloyd(nums));