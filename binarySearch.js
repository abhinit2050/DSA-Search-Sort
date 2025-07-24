//recursion
// var search = function(nums, target) {
//    let lI = 0;
//    let rI=nums.length-1;
   

//         function binSearch(li, ri) {
//           let mI = Math.floor((li + ri) / 2);
//             console.log(`Left Index: ${li}, Right Index: ${ri}, Middle Index: ${mI}`);
            
//           if (li > rI) {
//             console.log("Target not found");
//             return -1;
//           }

//           if (nums[mI] == target) {
//             console.log(`Found target at index: ${mI}`);
//             return mI;
//           } else if (nums[mI] < target) {
//             lI = mI + 1;
//             return binSearch(lI, rI);
//           } else if (nums[mI] > target) {
//             rI = mI - 1;
//             return binSearch(lI, rI);
//           }  
//         }
//         let fin = binSearch(lI, rI);
//        if(fin === undefined) {
//           return -1;
//        }else {
//             return fin;
//        }
// };

//using while loop
var search = function(nums, target) {
    let lI = 0;
    let rI = nums.length - 1;   

    if(nums.length === 0) return -1;
    if(nums.length === 1 && nums[0] !== target) return -1;

    if(nums.length === 1 && nums[0] === target) return 0;

    while(rI>=lI){
        let mI = Math.floor((lI + rI) / 2);


        if(nums[mI] === target) {
            return mI;
        }
        else if(nums[mI] < target) {
            lI = mI + 1;
        }
        else {
            rI = mI - 1;
        }   
    }

    return -1;
}

let nums = [-1,0,3,5,9,12];
let target = 2;

let result  = (search(nums, target)); 
console.log(result); 