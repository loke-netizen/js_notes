//count the characters no.of time occurred
let obj={}
function countChr(str){
    for (const ele of str) {
        (obj[ele])? obj[ele]++ :obj[ele]=1;
    }
    return obj
}
let str ="hi,am loke, nice to meet you"
console.log(countChr(str));
