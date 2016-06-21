/**
 * 分发
 */

const app = require('./server/app')

// 日志记录
// 开发阶段额外的东西

const server = app.listen(process.env.PORT || 2080, error => {
  if (error) throw error
  const address = server.address()
  app.set('url', `http://127.0.0.1:${address.port}`)
  console.log('server is ready @ http://127.0.0.1:' + address.port)
})
