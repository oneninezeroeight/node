# express

基于http模块的服务器

```
npm install express --save
```
下面就是使用express模块初始化一个服务器：
```js
const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(3000)
```
这个服务器用一个路由来处理前端发送的请求，

> app(方法post或者get甚至其他)(/路由,(请求,响应))

比如`app.get('/', function (req, res) {
    res.send('Hello World')
})`意思就是处理前端发送的get方法并且路由为/的所有请求

```js
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

app.listen(3000)
```

# axios

[axios一个http请求库](http://www.axios-js.com/)

```bash
npm install axios
```
可以使用axios配合promise来发送各种请求，但是post和get只能用在前端，其他put，delete可以用在后端
```js
const axios = require('axios');
 
// Make a request for a user with a given ID
axios.get('/user?ID=12345')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
```

# postman

请求测试的工具

伪造各种请求方法，一般用在测试后端接口的时候

后端的请求可以在postman里面测试

