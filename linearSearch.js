let arr=[3,6,7,4,32,1,9,8,2,5];

function linearSearch(arr, target) {

    

    for(let i=0;i<arr.length;i++){
        if(arr[i] == target){
           return i;
        } 
    }

    return -1;
}
console.log(linearSearch(arr,1));