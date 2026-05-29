let obj={}
function counChr(str){
    for (const ele of str) {
        (obj[ele])? obj[ele]++ :obj[ele]=1;
    }
    return obj
}
let str ="hi,am loke, nice to meet you"
console.log(counChr(str));
