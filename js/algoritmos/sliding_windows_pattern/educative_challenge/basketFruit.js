/**
 * Given an array of characters where each character represents a fruit tree, you are given two baskets and your goal is to put maximum number of fruits in each basket. The only restriction is that each basket can have only one type of fruit.

You can start with any tree, but once you have started you can’t skip a tree. You will pick one fruit from each tree until you cannot, i.e., you will stop when you have to pick from a third fruit type.
 */

/*
Input: Fruit=['A', 'B', 'C', 'A', 'C']
Output: 3
Explanation: We can put 2 'C' in one basket and one 'A' in the other from the subarray ['C', 'A', 'C']

Input: Fruit=['A', 'B', 'C', 'B', 'B', 'C']
Output: 5
Explanation: We can put 3 'B' in one basket and two 'C' in the other basket. 
This can be done if we start with the second letter: ['B', 'C', 'B', 'B', 'C']
*/


let fruit=['A', 'B', 'C', 'A', 'C']


let fruitBasket = (arr)=>{
    let k = 2;
    let frecuencyFruit = {};
    let start = 0;
    let max = 0;

    for(let end = 0 ; end < arr.length; end++){
        
        let endFruit = arr[end];
        if(!(endchar in frecuencyFruit)){
            frecuencyFruit[endFruit] = 0;
        }

        frecuencyFruit[endFruit] +=1;

        while(Object.keys(frecuencyFruit).length > k){

            let startFruit =  arr[start];
            frecuencyFruit[startFruit] -= 1;
            if(frecuencyFruit[startFruit] === 0){
                delete frecuencyFruit[startFruit];
            }
            start += 1;
        } 

        max = Math.max(max, end -start +1);
    }

    return max;


}
