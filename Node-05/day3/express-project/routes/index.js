var express = require('express');
// 路由模块化
var router = express.Router();

/* GET home page. */
router.get('/home.html', function (req, res, next) {
  // 寻找views的文件夹里面的index.jade的文件，把数据放进去渲染成html出来
  // ajax获取数据
  // res.render('test', { title: 'Express' });
  res.send(JSON.stringify({ title: 'Express' }))
  // next()
});

router.get('/home.html', function (req, res, next) {
  // 寻找views的文件夹里面的index.jade的文件，把数据放进去渲染成html出来
  // ajax获取数据
  // res.render('test', { title: 'Express' });
  res.send(JSON.stringify({ title: 'Home' }))
});

router.post('/home', (req, res, next) => {
  
  // $_POST和$_GET
  // 获取get请求的参数用req.query
  console.log(req.query)
  // 获取post请求的参数用req.body
  console.log(req.body)
  // 请求体
  let {
    name
  } = req.body
  res.send(name)
})

module.exports = router;
