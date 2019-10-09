const http = require('http')
// console.log(http)
// 创建服务器，并公开一个端口，让外部访问
// 请求request 请求头和请求体 前端给后端
// 响应response 响应头和响应体 后端给前端
http.createServer((request,response)=>{
    response.setHeader('name','yao')
    response.write('hello world')
    response.end()
}).listen(12345)
console.log('启动服务器')
// 0~65535