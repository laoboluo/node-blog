const { exec } = require('../db/mysql')
// 获取博客列表
const getList = (author, keywords) => {
  let sql = 'select * from blogs where 1=1 '
  if (author) {
    sql += `author='${author}' `
  }
  if (keywords) {
    sql += `keywords likes '${keywords}' `
  }
  sql += 'order by createtime desc;'
  console.log('sql', sql)
  return exec(sql)
}
// 新建博客内容controller
const newBlog = (blogData = []) => {
  const { content, createtime, title, author } = blogData
  console.log(content, createtime, title, author)
  const sql = `insert into blogs (content, createtime, title, author) values ('${content}', '${createtime}', '${title}', '${author}')`
  const data = exec(sql)
  return new Promise((resolve,reject) => {
    if(data) {
      resolve(true)
    } else {
      resolve(false)
    }
  })
}
module.exports = {
  getList,
  newBlog
}
