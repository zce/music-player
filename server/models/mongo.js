const mongoose = require('mongoose')

// 连接到数据库的操作
mongoose.connect('mongodb://localhost/test')
var db = mongoose.connection
db.on('error', console.error)
db.once('open', function () {
  //在这里创建你的模式和模型
  console.log('db ok')
})

// 定义模型（数据的抽象）
const demoSchema = new mongoose.Schema({
  id: { type: Number },
  title: { type: String },
  artist: { type: String },
  music: { type: String },
  poster: { type: String },
})

const Demo = mongoose.model('demo', demoSchema)

// const d = new Demo({id:1, title:'zhangsan', artist: 'sdfa', music: 'sdf', poster: 'sdfsdf'})

// d.save(function (error, inserted) {
//   console.log(arguments)
// })

Demo.find({ id: 1 }, (error, rows) => {
  console.log(rows)
})
