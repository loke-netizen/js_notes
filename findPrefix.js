let arr=["kitchen","kidney","kinder"]
function findPrefix(arr){
    if(arr.length===0)return "--"
    let prefix=arr[0]
    for (let i = 1; i < arr.length; i++) {
        while(!arr[i].startsWith(prefix)){
            prefix=prefix.slice(0,-1)
            if(prefix.length===0) return "-"
        }
        
    }
    return prefix
}
console.log(findPrefix(arr));
