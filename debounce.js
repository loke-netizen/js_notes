function debounce(fn,time){
    let timeId;
    return function(...args){
        if(timeId) clearTimeout(timeId)
        
        timeId=setTimeout(()=>{
            console.log(typeof args);
            
            fn.apply(this,args)
        },time)
    }
}
function search(query){    
console.log(`searching for ${query}`);

}
let debounceSearch=debounce(search,3000)
debounceSearch("wel")
debounceSearch("welcome")
debounceSearch("welcome back")
debounceSearch("welcome back!!")
