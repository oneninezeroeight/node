const http = require('http')
// console.log(http)
// 创建服务器，并公开一个端口，让外部访问
// 请求request 请求头和请求体 前端给后端
// 响应response 响应头和响应体 后端给前端
http.createServer((request, response) => {
    // 前端带给后端的请求参数都在request
    console.log(request.url)
    // cors允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    // 设置缓存
    response.setHeader('cache-control', 'max-age=60')
    // 响应头 cookie 后端一般比较少去改头部
    response.setHeader('name', 'yao')
    // response.statusCode = 404
    // 响应体 JSON
    response.write(JSON.stringify({
        name: 'yao',
        skill: ['ps', 'css']
    }))
    response.end()
}).listen(12345)
console.log('启动服务器')
// 0~65535
// express