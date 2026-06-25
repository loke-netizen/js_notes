
// function missingNo(arr){
//     n=arr.length+1
//     let formulaRes=n*(n+1)/2
//     let alive=arr.reduce((pre,cur)=>pre+cur,0)
//     return formulaRes-alive
// }
// console.log(missingNo([1,2,3,4,5,7,8]));
function missingNo(arr){
    let set=new Set(arr)
    let no=arr.length+1//or set.size+1
    for(let i=1;i<=no;i++){
        if(!set.has(i)) return i
    }

}
console.log(missingNo([1,2,3,4,5,6,7,8]));