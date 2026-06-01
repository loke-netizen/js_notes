function findlngwrd(str) {
     str = str.split(" ")
      let largeword = ""
     for (const ele of str) {
         
          if (largeword.length < ele.length) {
               largeword = ele
          }
     }
     return largeword
}
console.log(findlngwrd("the word issue tje topnouch is"));

// remove duplicate elements from array
// using set 
let array=[1,1,2,5,5,6,6,3,32,32]
console.log([...new Set(array)]);

// using indexOf
let arr=[1,1,2,5,5,6,6,3]
let res=arr.filter((num,index)=>arr.indexOf(num)===index)
console.log(res);
//therough reduce method
let arr3=[1,1,2,5,5,64,64,3]
console.log(arr3.reduce((pre,cur)=>(pre.includes(cur))?pre:
[...pre,cur]
,[]));
