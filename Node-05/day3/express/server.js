const express = require('express')
const app = express()
// 路由
// 前端发来get请求，并且路径为 /
app.get('/', function (req, res) {
    res.send('Hello World')
})
// 前端发来get请求，并且路径为 /home
app.get('/home', function (req, res) {
    res.send('home')
})
// 前端发来post请求，并且路径为 /home
app.post('/home', function (req, res) {
    // 修改响应头，允许跨域
    res.append('Access-Control-Allow-Origin', '*');
    res.append('name', 'yao one');
    res.send('home')
})

app.put('/home', function (req, res) {
    // 修改响应头，允许跨域
    res.append('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'POST, GET, PUT'); 
    res.append('name', 'yao one');
    res.send('home')
})

app.listen(3000)