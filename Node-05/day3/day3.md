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

快速搭建一个express项目的时候可以使用express的脚手架
```bash
npm install -g express-generator@4
# 使用express命令创建一个项目
express ./tmp/foo
cd ./tmp/foo
# 根据package.json安装依赖
npm install
npm run start
```

- bin www 是一份启动文件 node ./bin/www 会在这里使用http模块创建服务器，它会接受express实例化的app
- public 公开的文件夹 放前端的文件 相当于wamp的www文件夹
- routes 路由 把路由模块化
- views 视图文件夹 它是把jade预编译为html结构
- app.js express初始化的app对象，封装了很多方法

浏览器只能识别html,css和js

- css sass本质上会转化为css
- html jade本质上会转化为html HTML5语义化
- js typescript本质上转化js


```js
// 放到后端渲染，前端拿到是html结构
res.render('test', { title: 'Express' });
// 放到前端渲染，前端只拿到数据 流行这种做法 前端分离 前端管渲染 后端管数据 后端压力比较大
res.send(JSON.stringify({ title: 'Express' }))
```

获取前端的数据
```js
// $_POST和$_GET
// 获取get请求的参数用req.query
console.log(req.query)
// 获取post请求的参数用req.body
console.log(req.body)
```

路由里面会有一个next参数，一般情况，前端请求进了后端的路由，一旦被捕获，express就不会往下执行，但是如果触发next，就算捕获请求，也继续往下运行。
```js
router.get('/home.html', function (req, res, next) {
  res.send(JSON.stringify({ title: 'Express' }))
});
```

# jade

html预编译语言，前后分离，没有必要用后端模板引擎(预编译)，语义化主流，看标签`<button>`

```bash
npm install jade --global
```

```jade
div#id.class helloworld
  p abc
<div id="id" class="class">helloworld
  <p>abc</p>
</div>
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

# bootstrap

精髓就是搬运



# 登录注册

