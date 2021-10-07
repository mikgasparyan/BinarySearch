let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
function binary(arr, elem){
    let left = -1;
    let right = arr.length;
    
    while(right - left > 1){
        let mid = Math.floor((left + right)/2);
        if (arr[mid] === elem){
            return mid;
        }
        if (arr[mid] > elem){
            right = mid;
        }else{
            left = mid;
        }
    }
    return -1;
}
console.log(binary(arr, 16));