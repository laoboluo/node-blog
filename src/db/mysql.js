const { MYSQL_CONF }  = require('../conf/db.js')
const mysql = require("mysql")
// 创建sql模型
const con = mysql.createConnection(MYSQL_CONF)
// 单例模式创建sql连接
con.connect()
const sql = 'select * from users'
// promise处理sql语句
function exec(sql) {
  const promise = new Promise((resolve, reject) => {
    con.query(sql, (err, result) => {
      if(err) {
        reject(err)
        return
      }
      resolve(result)
    })
  })
  return promise
}
module.exports = {
  exec
}
