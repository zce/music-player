class Music {
  constructor(id, title, artist, music, poster) {
    this.id = id
    this.title = title
    this.artist = artist
    this.music = music
    this.poster = poster
  }

  static getList() {
    return storage
  }

  static getById(id) {
    return storage.find(s => s.id === id)
  }

  delete() {
    return storage.splice(storage.indexOf(this), 1)
  }

  save() {
    storage.indexOf(this) === -1 && storage.push(this)
  }

  update() {
    return true
  }
}

const storage = [
  new Music(1, 'Knockin\' On Heaven\'s Door', 'Guns N\' Roses', 'Guns N\' Roses - Knockin\' On Heaven\'s Door.mp3', 'Guns N\' Roses.jpg'),
  new Music(2, 'I Will Be Your Shelter', 'Rebecca Blaylock', 'Rebecca Blaylock - I Will Be Your Shelter.mp3', 'Rebecca Blaylock.jpg'),
  new Music(3, '我恨我痴心', '刘德华', '刘德华 - 我恨我痴心.mp3', '刘德华.jpg'),
  new Music(4, '不说再见', '好妹妹乐队', '好妹妹乐队 - 不说再见.mp3', '好妹妹乐队.jpg'),
  new Music(5, '青城山下白素贞', '好妹妹乐队', '好妹妹乐队 - 青城山下白素贞.mp3', '好妹妹乐队.jpg'),
  new Music(6, '送情郎(2010.12.11 德云二队张一元晚场)', '岳云鹏', '岳云鹏 - 送情郎(2010.12.11 德云二队张一元晚场).mp3', '岳云鹏.jpg'),
  new Music(7, '往事只能回味', '岳云鹏,宋小宝', '岳云鹏,宋小宝 - 往事只能回味.mp3', '岳云鹏,宋小宝.jpg'),
  new Music(8, '天梯(Live) - live', '张智霖', '张智霖 - 天梯(Live) - live.mp3', '张智霖.jpg'),
  new Music(9, '友情岁月', '李克勤', '李克勤 - 友情岁月.mp3', '李克勤.jpg'),
  new Music(10, '合久必婚', '李克勤', '李克勤 - 合久必婚.mp3', '李克勤.jpg'),
  new Music(11, '天梯', '李克勤', '李克勤 - 天梯.mp3', '李克勤.jpg'),
  new Music(12, '爱不释手', '李克勤', '李克勤 - 爱不释手.mp3', '李克勤.jpg'),
  new Music(13, '飞花', '李克勤', '李克勤 - 飞花.mp3', '李克勤.jpg'),
  new Music(14, '充满希望', '玛莉亚', '玛莉亚 - 充满希望.mp3', '玛莉亚.jpg'),
  new Music(15, '友谊之光', '玛莉亚', '玛莉亚 - 友谊之光.mp3', '玛莉亚.jpg'),
  new Music(16, '老中医', '花粥', '花粥 - 老中医.mp3', '花粥.jpg'),
  new Music(17, '静静的看着你装逼', '花粥&四四', '花粥&四四 - 静静的看着你装逼.mp3', '花粥&四四.jpg'),
  new Music(18, '也曾相识', '谭咏麟', '谭咏麟 - 也曾相识.mp3', '谭咏麟.jpg'),
  new Music(19, '夏日寒风', '谭咏麟', '谭咏麟 - 夏日寒风.mp3', '谭咏麟.jpg'),
  new Music(20, '雾之恋', '谭咏麟', '谭咏麟 - 雾之恋.mp3', '谭咏麟.jpg'),
]

module.exports = Music

// function Music (id, title, artist, music, poster) {
//   this.id = id
//   this.title = title
//   this.artist = artist
//   this.music = music
//   this.poster = poster
// }

// Music.prototype.play = function () {
//   this
// }

// Music.get = function () {

// }

// class Music {
//   constructor (id, title, artist, music, poster) {
//     this.id = id
//     this.title = title
//     this.artist = artist
//     this.music = music
//     this.poster = poster
//   }

//   play () {

//   }

//   static get () {

//   }
// }

// var music = new Music()
