
function InsertionSort(arr){

    let n = arr.length;
    
    for(let i=1;i<n;i++){
        
        let prev= i-1;
        let current = arr[i];
        while(current < arr[prev] && prev>=0){
            arr[prev+1] = arr[prev];
            prev--;
            
        }

    arr[prev+1] = current;

    }

    return arr;
}

let nums = [3,4,5,7,1,2,-9];
let sortedArray = InsertionSort(nums);
console.log(sortedArray);