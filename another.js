//find largest word in a sentence
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
console.log(findlngwrd("hello i'am lokh nice to meet you"));
