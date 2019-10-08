function a() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('a')
            resolve()
        }, 1000)
    })

}
function b() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('b')
            resolve()
        }, 2000)
    })
}

function c() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('c')
            resolve()
        }, 500)
    })
}

a().then(b).then(c)