const fs = require('fs')
// gulp把你的文件给读出来，然后修改，最后再写回去
// 读取文件
function readFile() {
    return new Promise((resolve, reject) => {
        fs.readFile('./index.js', (err, data) => {
            if (err) throw err;
            // 读出来的是二进制
            // console.log(data.toString());
            let code = data.toString();
            // 正则匹配把所有的console.log
            let output = code
                .replace(/console.log\([a-z0-9'"]+\)/g, '')
                .replace(/const/g, 'var')
            console.log(output)
            // 把结果交给下一个Promise
            resolve(output)
        })
    })
}


function writeFile(output) {
    return new Promise((resolve, reject) => {
        fs.writeFile('./output.js', output, (err) => {
            if (err) throw err;
            console.log('写入成功');
        })
    })
}


// readFile().then(writeFile)

;(async () => {
    let output = await readFile()
    await writeFile(output)
})()