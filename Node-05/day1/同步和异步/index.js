function a(){
    console.log("a")
}

function b(callback){
    setTimeout(()=>{
        console.log("b")
        callback()
        setTimeout(()=>{
            console.log("c")
            setTimeout(()=>{
                console.log("d")
            },1000)
        },1000)
    },1000)
}
// 回调让异步变得有意义
// 如果异步没回调，那有可能失去异步的结果
// 如果见到有回调函数，那一般这个函数是异步
b()
a()


