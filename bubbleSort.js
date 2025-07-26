function bubbleSort(arr){
    let n = arr.length;

    for(let i=0; i<n-1;i++){

        for(let j=0;j<n-1-i;j++){
            
            if(arr[j]>arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
            
        }
        
    }
   

    return arr;
}

let nums = [5, 4, 9, 1, 0];
let sortedArray = bubbleSort(nums);
console.log(sortedArray); 