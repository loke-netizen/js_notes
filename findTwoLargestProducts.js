let arr = [1, 2, 3, 6, 4, 5,6]


function maxii(arr) {
    let max = -Infinity;
    let max1 = -Infinity;
    let indexofMax;
    let indexofMax1;

    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i]
            indexofMax = i
        }


    } console.log(indexofMax);

    for (let i = 0; i < arr.length; i++) {
        if (max1 < arr[i] && indexofMax !== i) {
            max1 = arr[i]
            indexofMax1 = i

        }
    } console.log(indexofMax1);

    return max * max1
}
console.log(maxii(arr));

