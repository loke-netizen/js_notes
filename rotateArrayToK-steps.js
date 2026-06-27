function rotateArray(arr, k) {
    k = k % arr.length

    reverse(arr, 0, arr.length - 1)//54321
    reverse(arr, 0, k - 1)// 34521 
    reverse(arr, k, arr.length - 1)//  34512
    return arr
}

function reverse(arr, start, end) {
    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]]
        start++;
        end--
    }
}
let array = [1, 2, 3, 4, 5]  
console.log(rotateArray(array, 3));
