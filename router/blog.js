const {SuccessModel} = require('../src/model/resModel')
const { getList, newBlog } = require('../src/controller/blog')
// 博客模块
const handleBlogRouter = (req, res) => {
  const method = req.method
  // 获取博客列表路由
  if(method === 'GET' && req.path === '/api/blog/list') {
    const author =  req.query.author || ''
    const keywords = req.query.keywords || ''
    return getList(author, keywords).then((result) => {
      return new SuccessModel(result)
    })
  }
  // 获取博客详情路由
  if(method === 'GET' && req.path === '/api/blog/detail') {
    return {
      msg: 'this is get blog interface'
    }
  }
  // 新建博客路由
  if(method === 'POST' && req.path === '/api/blog/new') {
    console.log('req.body', req.body)
    return newBlog(req.body).then((result) => {
      return new SuccessModel(result)
    })
  }
  // 更新博客详情路由
  if(method === 'POST' && req.path === '/api/blog/update') {
    return {
      msg: 'this is update blog interface'
    }
  }
  // 删除博客详情路由
  if(method === 'POST' && req.path === '/api/blog/delete') {
    return {
      msg: 'this is delete blog interface'
    }
  }
}
module.exports = handleBlogRouter
