
function selectionSort(a){
    const n = a.length;
    for(let i=0;i<n-1;i++){
        let min=i;
        for(let j=i+1;j<n;j++){
            if(a[j]<a[min]){
                min=j
            }
        }
        if(min != i){
            let temp = a[i];
            a[i] = a[min];
            a[min] = temp;
        }
    }

    return a;
}

const arr = [5, 4, 9, 1, 0];
let sortedArray = selectionSort(arr);
console.log(sortedArray); 