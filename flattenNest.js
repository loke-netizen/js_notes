let arr=[[1, 2, 3],[4, 5, 6],[7, 8, 9]]
function nestedarray(arr){
    let emptyArr=[]
    arr.forEach(ele => {
        if(Array.isArray(ele)){
            emptyArr=emptyArr.concat(nestedarray(ele))
        }
        else{
            emptyArr.push(ele)
        }
      
    });   
    return emptyArr      
}
console.log(nestedarray(arr));
