// 创建错误
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
// 日志模块
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// 中间件
// view engine setup
app.set('views', path.join(__dirname, 'views'));
// 视图使用jade引擎解析
app.set('view engine', 'jade');
// 打印日志信息
app.use(logger('dev'));
// 把获取前端的请求信息转化json格式
app.use(express.json());
// 处理转码问题
app.use(express.urlencoded({ extended: false }));
// 处理前端请求头部分带来的cookie
app.use(cookieParser());
app.use((req, res, next) => {
  // 允许所有请求跨域，所有请求的响应头部分都带上cors
  res.append('Access-Control-Allow-Origin', '*')
  next()
})
// 设置为静态文件夹
app.use(express.static(path.join(__dirname, 'public')));
// 路由的模块化
app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
// 监听自身的错误
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
