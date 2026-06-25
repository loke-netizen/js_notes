function fisrstNonRepeatChr(str){
    str=str.toLowerCase()
    let obj={}
    for (const ele of str) {
        if(obj[ele]){
            obj[ele]++
        }
        else{
            obj[ele]=1
        }
    } 
    for (const key in obj) {
        if(obj[key]==1){
            return key
        } 
        
    }
    return null
}
console.log(fisrstNonRepeatChr("oonRepeatChrpcathn"));
