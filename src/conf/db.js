let MYSQL_CONF
const env = process.env.NODE_ENV
// 根据环境变量创建sql配置
if (env === 'dev') {
  MYSQL_CONF = {
    host: 'localhost',
    user: 'root',
    password: '518616wei',
    port: '3306',
    database: 'myblog'
  }
}
if (env === 'production') {
  MYSQL_CONF = {
    host: 'localhost',
    user: 'root',
    password: '518616wei',
    port: '3306',
    database: 'myblog'
  }
}
module.exports = {
  MYSQL_CONF
}
