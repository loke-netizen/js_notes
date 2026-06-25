function balancedParenthesis(str){
    let container=[]
for (const ele of str) {
    if(ele=="(")
    {
        container.push(ele)
    }
    else if(ele==")"){
        if(container.length==0){
            return false
        }
        container.pop()
    }
   
}
 return container.length==0
}
console.log(balancedParenthesis(")("));