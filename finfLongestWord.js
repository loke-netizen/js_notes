function findLongestWord(str){
    if (!str) return "---";
    str=str.split(" ")
    let longWord=""
    // for(let word of str){
    //     if(longWord.length<word.length){
    //         longWord=word
    //     }
    // }
    for(i=0;i<str.length;i++){
        if(longWord.length<str[i].length){
            longWord=str[i]
        }
    }
    return longWord
}
let str=`undefined → value not assigned
* ull → intnally empty`
let find=findLongestWord
console.log(find(str).split(""));
