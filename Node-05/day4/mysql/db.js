var mysql = require('mysql');
// 初始化连接
var connection = mysql.createConnection({
    // 域名
    host: 'localhost',
    port: '8889',
    // 用户名
    user: 'root',
    // 密码
    password: '123456',
    // 数据库
    database: '1908'
});
// 执行连接
connection.connect();
connection.query('SELECT * FROM students', function (error, results, fields) {
    if (error) throw error;
    console.log(results[0].name);
});

connection.end();