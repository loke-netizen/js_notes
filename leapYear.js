let alwa=""
function waitinque(){
return new Promise((resolve,reject)=>{
    setTimeout(() => {
        if(alwa){
            resolve("alwa vagitan")
        }
        else{
            reject("gali akitu")
        }
    }, 1000);
})
}
async function buyalwa(){
 try{
    let snacks=await waitinque()
    console.log(snacks);
    
 }
 catch{
    console.log("alwa over");
    
 }

  
}
buyalwa()