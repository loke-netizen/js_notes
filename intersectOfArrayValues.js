function intersectingValues(arr1,arr2){
    arr1=new Set(arr1)
   let res= arr2.filter(ele=>arr1.has(ele))
   return [...new Set(res)]
}
console.log(intersectingValues([1,2,2,3,4,5],[2,3,3,5]));


