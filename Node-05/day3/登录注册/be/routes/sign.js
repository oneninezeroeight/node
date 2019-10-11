var express = require('express');
var router = express.Router();
var sql = require('../mysql/pool');

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

router.post('/test', async function (req, res, next) {
    let {
        id
    } = req.body
    // 调用sql语句去操作数据库
    let results = await sql('SELECT * FROM students WHERE ?', {
        id
    });
    // 把数据库拿到的结果放到响应体里面，返回给前端
    res.json(results);
})

module.exports = router;
