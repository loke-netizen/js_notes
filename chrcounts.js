function countchr(str) {
    str = str.toLowerCase()
    let obj = {}
    // for(let chr of str){
    //     if(obj[chr]){
    //         obj[chr]+=1
    //     }
    //     else{
    //         obj[chr]=1
    //     }
    // }
    for (let i = 0; i < str.length; i++) {
        if (obj[str[i]]) {
            obj[str[i]]++
        }
        else {
            obj[str[i]] = 1
        }
    }
    return obj
}
let str="ldodl"
console.log(countchr(str))