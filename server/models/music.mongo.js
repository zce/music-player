const db = require('./db')

const musicSchema = new db.Schema({
  title: { type: String },
  artist: { type: String },
  music: { type: String },
  poster: { type: String },
})

musicSchema.statics.findByTitle = function (title) {
  return this.find({ title })
}

const music = module.exports = db.model('Music', musicSchema)

// const music = new Music({ title: 'demo', artist: 'demo', music: 'demo', poster: 'demo' })
// music.save((error, res) => {
//   console.log(res)
// })
// Music.find(function (error, res) {
//   console.log(res)
// })


const res = music.findByTitle('demo')

console.log(res)
