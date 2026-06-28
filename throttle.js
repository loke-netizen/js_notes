function throttle(fn,delay){
    let lastTime=0

    return function(...args){
       let currentTime=new Date().getTime()
        if (currentTime-lastTime>=delay){
            lastTime=currentTime
            fn.apply(this,args)
        }
    }
}
function onResize(){
    console.log("widows are resized",new Date().toLocaleTimeString());
    
}

window.addEventListener("resize",throttle(onResize,2000))