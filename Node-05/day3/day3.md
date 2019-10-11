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

## 脚手架

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
- public 公开的文件夹 放前端的文件 相当于wamp的www文件夹 放开发好的前端文件 文件路由
- routes 路由 把路由模块化 逻辑路由 调用数据库，对后端系统操作
- views 视图文件夹 它是把jade预编译为html结构 后端渲染手法，基本不用
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

产品经理早上，各位同志开会了，show出它的原型图，指导各位产品的预想形态，产品原型图，产品文档(来自于客服部的投诉，老板的建议)

- [原型图](http://www.axureux.com/demo/Templates012/#g=1&p=%E4%BD%9C%E5%93%81%E9%A6%96%E9%A1%B5)

设计妹子根据原型图，要去绘制图片，素材，输出带有素材带有标记(间距标记，颜色值标记)，一份PSD，PNG和JPG的图，妹子会吧所有的素材放到Git(github，gitee，gitlab，公司内部自建git服务器)，参考网上的UI框架(bootstrap)，为了成本会减掉UI成本

前端切图，运用html和css把设计师的图纸转化为html文件，canvas渲染引擎，前端完成html文件之后，根据后端的接口文档，去调用数据，完成下一步渲染，发送ajax请求等去跟后端通信(跨域问题)
```js
const sign = ({
    username,
    password
}) => {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: 'http://localhost:3000/sign',
            type: 'POST',
            data: {
                username,
                password
            },
            success(data) {
                console.log(data)
                resolve(data)
            },
            error(err) {
                reject(err)
            }
        })
    })
}
$('#sign').click(async () => {
    let username = $('#inputUsername').val();
    let password = $('#inputPassword').val();
    let data = await sign({
        username,
        password
    })
    switch (data.status) {
        case 0:
            break;
        case 1:
            location.href = 'https://www.baidu.com'
    }
    // console.log(data)
})
```

后端

后端先用脚手架初始化一个后端项目
```bash
express ./be
```
因为前后端是分离的，就是两个团队是分开开发的，所以此时为了让前端顺利地调用接口，那么后端用了CORS来解决跨域问题
```js
// 中间件处理响应头部分，加上CORS
app.use((req,res,next)=>{
  res.append('Access-Control-Allow-Origin','*')
  next()
})
```
后端根据登录注册的需求，设计了一个新的路由，并对应与数据库产生关联，开发完成之后，内部先测试，然后把路由写在一份接口文档
```js
var express = require('express');
var router = express.Router();
/* GET home page. */
router.post('/', function (req, res, next) {
    let {
        username,
        password
    } = req.body
    if (username === 'abc' && password === '456') {
        res.json({
            status: 1,
            msg: '登录成功'
        });
    } else {
        res.json({
            status: 0,
            msg: '登录失败'
        });
    }
    // console.log(req.body)
});
module.exports = router;
```
测试人员，妹子，找出你的bug，你必须老实更改你的程序错误

上线了，加班，用户使用量少，先上后端，再上前端，把前后端放在同一个服务器上更新



- be backend 后端 主要职责就是写接口(路由)
- fe fontend 前端 主要切图，还有获取数据渲染