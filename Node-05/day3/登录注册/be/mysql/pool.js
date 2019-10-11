var mysql = require('mysql');
var config = require('./config')
var pool = mysql.createPool({
    connectionLimit: 10,
    ...config
});

let sql = (sql, params) => {
    return new Promise((resolve, reject) => {
        pool.getConnection(function (err, connection) {
            // 可以去掉连接和关闭
            connection.query(sql, params ? [params] : null, function (error, results, fields) {
                if (error) {
                    throw error;
                    reject(error);
                } else {
                    resolve(results);
                }
                // 释放连接
                connection.release();
            });
        })
    })

}

module.exports = sql

