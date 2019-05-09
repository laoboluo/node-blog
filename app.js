const handleUserRouter = require('./router/user')
const handleBlogRouter = require('./router/blog')
const querystring = require('querystring')
// 封装postdata处理
const getPostData = (req) => {
  const promise = new Promise((resolve, reject) => {
    if (req.method !== 'POST') {
      resolve({})
      return
    }
    if (req.headers['content-type'] !== 'application/json') {
      resolve({})
      return
    }
    let postData = ''
    req.on('data', chunk => {
      postData += chunk.toString()
    })
    req.on('end', () => {
      if (!postData) {
        resolve({})
        return
      }
      resolve(JSON.parse(postData.toString()))
    })
  })
  return promise
}
const appServer = (req, res) => {
  res.setHeader('Content-type', 'application/json')
  const url = req.url
  req.path = url.split('?')[0]
  req.query = querystring.parse(url.split('?')[1])

  getPostData(req).then((postData) =>  {
    // 将前端params赋值body
    req.body = postData
    // 博客模块 路由引入
    const blogResult = handleBlogRouter(req, res)
    if(blogResult) {
      blogResult.then((blogData) => {
          res.end(
            JSON.stringify(blogData)
          )
      })
      return
    }
    // 用户模块路由引入
    const userData = handleUserRouter(req, res)
    if (userData) {
      res.end(
        JSON.stringify(userData)
      )
      return
    }
    // 没有指定的api模块返回404
    res.writeHead(404, {'Content-type': 'text/plain'})
    res.write('404 not found')
    res.end()
  })
}
module.exports = appServer
