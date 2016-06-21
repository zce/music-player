// 引入 mongoose 模块
const mongoose = module.exports = require('mongoose')

const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error'))
db.once('open', (callback) => {
  console.log('db opened')
})

// 然后连接对应的数据库：mongodb://localhost/test
// 其中，前面那个 mongodb 是 protocol scheme 的名称；localhost 是 mongod 所在的地址；
// 端口号省略则默认连接 27017；test 是数据库的名称
// mongodb 中不需要建立数据库，当你需要连接的数据库不存在时，会自动创建一个出来。
mongoose.connect('mongodb://localhost/music')
