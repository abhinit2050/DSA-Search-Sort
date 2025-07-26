
function merge(arr1, arr2){

    let m = arr1.length;
    let n = arr2.length;
    let p1=0;
    let p2 =0;
    let newArr=[];

    for(let i=0;i<m+n;i++){
       
        if(p2>=n || (p1<m && arr1[p1]<arr2[p2])){
           
            newArr[i] = arr1[p1];
            p1++;
        } else {
            
            newArr[i] = arr2[p2];
            p2++;
        }
       
        
    }

    return newArr;
}

function mergeSort(arr){

    let mid= Math.floor(arr.length / 2);   
    if(arr.length < 2) return arr;

   let left = mergeSort(arr.slice(0,mid));
    let right = mergeSort(arr.slice(mid));

    return merge(left, right)
}

let arr = [233, 1001, 2, 1987, 433, 9];
let sortedArray = mergeSort(arr);
console.log(sortedArray);

