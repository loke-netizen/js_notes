let arr=[1,1,2,2,3,4,4,3,5,76,76,9]
let filteredrr=arr.reduce((pre,cur)=>(pre.includes(cur))?pre:[...pre,cur],[])
console.log(filteredrr);

// let filteredrr = arr.reduce((pre, cur) => {
//     if (pre.includes(cur)) {
//         return pre
//     }
//     else {
//         pre.push(cur)
//        return pre
//     }
// }, [])
// console.log(filteredrr);
