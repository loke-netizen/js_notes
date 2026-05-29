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
