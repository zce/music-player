(function (global) {

  const songs = [{ "id": 1, "name": "Knockin' On Heaven's Door", "artist": "Guns N' Roses", "duration": 342, "music": "http://127.0.0.1:2080/uploads/Guns N' Roses - Knockin' On Heaven's Door.mp3", "poster": "http://127.0.0.1:2080/uploads/Guns N' Roses.jpg", "lyric": "http://127.0.0.1:2080/uploads/Guns N' Roses - Knockin' On Heaven's Door.lrc" }, { "id": 2, "name": "I Will Be Your Shelter", "artist": "Rebecca Blaylock", "duration": 342, "music": "http://127.0.0.1:2080/uploads/Rebecca Blaylock - I Will Be Your Shelter.mp3", "poster": "http://127.0.0.1:2080/uploads/Rebecca Blaylock.jpg", "lyric": "http://127.0.0.1:2080/uploads/Rebecca Blaylock - I Will Be Your Shelter.lrc" }, { "id": 3, "name": "我恨我痴心", "artist": "刘德华", "duration": 342, "music": "http://127.0.0.1:2080/uploads/刘德华 - 我恨我痴心.mp3", "poster": "http://127.0.0.1:2080/uploads/刘德华.jpg", "lyric": "http://127.0.0.1:2080/uploads/刘德华 - 我恨我痴心.lrc" }, { "id": 4, "name": "不说再见", "artist": "好妹妹乐队", "duration": 342, "music": "http://127.0.0.1:2080/uploads/好妹妹乐队 - 不说再见.mp3", "poster": "http://127.0.0.1:2080/uploads/好妹妹乐队.jpg", "lyric": "http://127.0.0.1:2080/uploads/好妹妹乐队 - 不说再见.lrc" }, { "id": 5, "name": "青城山下白素贞", "artist": "好妹妹乐队", "duration": 342, "music": "http://127.0.0.1:2080/uploads/好妹妹乐队 - 青城山下白素贞.mp3", "poster": "http://127.0.0.1:2080/uploads/好妹妹乐队.jpg", "lyric": "http://127.0.0.1:2080/uploads/好妹妹乐队 - 青城山下白素贞.lrc" }, { "id": 6, "name": "送情郎(2010.12.11 德云二队张一元晚场)", "artist": "岳云鹏", "duration": 342, "music": "http://127.0.0.1:2080/uploads/岳云鹏 - 送情郎(2010.12.11 德云二队张一元晚场).mp3", "poster": "http://127.0.0.1:2080/uploads/岳云鹏.jpg", "lyric": "http://127.0.0.1:2080/uploads/岳云鹏 - 送情郎(2010.12.11 德云二队张一元晚场).lrc" }, { "id": 7, "name": "往事只能回味", "artist": "岳云鹏,宋小宝", "duration": 342, "music": "http://127.0.0.1:2080/uploads/岳云鹏,宋小宝 - 往事只能回味.mp3", "poster": "http://127.0.0.1:2080/uploads/岳云鹏,宋小宝.jpg", "lyric": "http://127.0.0.1:2080/uploads/岳云鹏,宋小宝 - 往事只能回味.lrc" }, { "id": 8, "name": "天梯(Live) - live", "artist": "张智霖", "duration": 342, "music": "http://127.0.0.1:2080/uploads/张智霖 - 天梯(Live) - live.mp3", "poster": "http://127.0.0.1:2080/uploads/张智霖.jpg", "lyric": "http://127.0.0.1:2080/uploads/张智霖 - 天梯(Live) - live.lrc" }, { "id": 9, "name": "友情岁月", "artist": "李克勤", "duration": 342, "music": "http://127.0.0.1:2080/uploads/李克勤 - 友情岁月.mp3", "poster": "http://127.0.0.1:2080/uploads/李克勤.jpg", "lyric": "http://127.0.0.1:2080/uploads/李克勤 - 友情岁月.lrc" }, { "id": 10, "name": "合久必婚", "artist": "李克勤", "duration": 342, "music": "http://127.0.0.1:2080/uploads/李克勤 - 合久必婚.mp3", "poster": "http://127.0.0.1:2080/uploads/李克勤.jpg", "lyric": "http://127.0.0.1:2080/uploads/李克勤 - 合久必婚.lrc" }, { "id": 11, "name": "天梯", "artist": "李克勤", "duration": 342, "music": "http://127.0.0.1:2080/uploads/李克勤 - 天梯.mp3", "poster": "http://127.0.0.1:2080/uploads/李克勤.jpg", "lyric": "http://127.0.0.1:2080/uploads/李克勤 - 天梯.lrc" }, { "id": 12, "name": "爱不释手", "artist": "李克勤", "duration": 342, "music": "http://127.0.0.1:2080/uploads/李克勤 - 爱不释手.mp3", "poster": "http://127.0.0.1:2080/uploads/李克勤.jpg", "lyric": "http://127.0.0.1:2080/uploads/李克勤 - 爱不释手.lrc" }, { "id": 13, "name": "飞花", "artist": "李克勤", "duration": 342, "music": "http://127.0.0.1:2080/uploads/李克勤 - 飞花.mp3", "poster": "http://127.0.0.1:2080/uploads/李克勤.jpg", "lyric": "http://127.0.0.1:2080/uploads/李克勤 - 飞花.lrc" }, { "id": 14, "name": "充满希望", "artist": "玛莉亚", "duration": 342, "music": "http://127.0.0.1:2080/uploads/玛莉亚 - 充满希望.mp3", "poster": "http://127.0.0.1:2080/uploads/玛莉亚.jpg", "lyric": "http://127.0.0.1:2080/uploads/玛莉亚 - 充满希望.lrc" }, { "id": 15, "name": "友谊之光", "artist": "玛莉亚", "duration": 342, "music": "http://127.0.0.1:2080/uploads/玛莉亚 - 友谊之光.mp3", "poster": "http://127.0.0.1:2080/uploads/玛莉亚.jpg", "lyric": "http://127.0.0.1:2080/uploads/玛莉亚 - 友谊之光.lrc" }, { "id": 16, "name": "老中医", "artist": "花粥", "duration": 342, "music": "http://127.0.0.1:2080/uploads/花粥 - 老中医.mp3", "poster": "http://127.0.0.1:2080/uploads/花粥.jpg", "lyric": "http://127.0.0.1:2080/uploads/花粥 - 老中医.lrc" }, { "id": 17, "name": "静静的看着你装逼", "artist": "花粥&四四", "duration": 342, "music": "http://127.0.0.1:2080/uploads/花粥&四四 - 静静的看着你装逼.mp3", "poster": "http://127.0.0.1:2080/uploads/花粥&四四.jpg", "lyric": "http://127.0.0.1:2080/uploads/花粥&四四 - 静静的看着你装逼.lrc" }, { "id": 18, "name": "也曾相识", "artist": "谭咏麟", "duration": 342, "music": "http://127.0.0.1:2080/uploads/谭咏麟 - 也曾相识.mp3", "poster": "http://127.0.0.1:2080/uploads/谭咏麟.jpg", "lyric": "http://127.0.0.1:2080/uploads/谭咏麟 - 也曾相识.lrc" }, { "id": 19, "name": "夏日寒风", "artist": "谭咏麟", "duration": 342, "music": "http://127.0.0.1:2080/uploads/谭咏麟 - 夏日寒风.mp3", "poster": "http://127.0.0.1:2080/uploads/谭咏麟.jpg", "lyric": "http://127.0.0.1:2080/uploads/谭咏麟 - 夏日寒风.lrc" }, { "id": 20, "name": "雾之恋", "artist": "谭咏麟", "duration": 342, "music": "http://127.0.0.1:2080/uploads/谭咏麟 - 雾之恋.mp3", "poster": "http://127.0.0.1:2080/uploads/谭咏麟.jpg", "lyric": "http://127.0.0.1:2080/uploads/谭咏麟 - 雾之恋.lrc" }]

  /**
   * 加载模版内容
   * @param  {string} id 模版ID
   * @return {string}    模版内容
   */
  const loadTemplate = id => document.getElementById(id + '_tmpl').innerHTML

  const convertDuration = duration => {
    const pad = (num, n) => (Array(n).join(0) + num).slice(-n)
    const h = Math.floor(duration / 3600)
    const m = Math.floor(duration % 3600 / 60)
    const s = Math.floor(duration % 60)
    return h ? `${pad(h, 2)}:${pad(m, 2)}:${pad(s, 2)}` : `${pad(m, 2)}:${pad(s, 2)}`
  }

  /**
   * 整个应用程序模块
   * @type {Vue}
   */
  const App = global.Vue.extend({
    created () {
      App.allId = songs.map(s => s.id)
    }
  })
  App.audio = new Audio()
  App.allId = []

  /**
   * 首页组件
   * @type {Vue}
   */
  const Home = global.Vue.extend({
    template: loadTemplate('home')
  })

  /**
   * 歌曲列表组件
   * @type {Vue}
   */
  const Songs = global.Vue.extend({
    template: loadTemplate('list'),
    data () {
      return { list: songs }
    },
    methods: {},
  })

  /**
   * 播放器组件
   * @type {Vue}
   */
  const Player = global.Vue.extend({
    template: loadTemplate('item'),
    data () {
      return { item: {} }
    },
    route: {
      data (transition) {
        const id = parseInt(transition.to.params.id, 10)
        if (!id) return router.go({ name: 'list' })
        const temp = songs.find(s => s.id === id)
        if (!temp) return router.go({ name: 'list' })
        const item = { current: 0, playing: false, random: false }
        Object.assign(item, temp)
        App.audio.src = item.music
        App.audio.autoplay = true
        App.audio.addEventListener('loadedmetadata', () => {
          item.duration = App.audio.duration
        })
        App.audio.addEventListener('timeupdate', () => {
          item.current = App.audio.currentTime
        })
        App.audio.addEventListener('play', () => {
          item.playing = true
        })
        App.audio.addEventListener('pause', () => {
          item.playing = false
        })
        return { item: item }
      }
    },
    methods: {
      convert: convertDuration,
      play () {
        if (this.item.playing) {
          App.audio.pause()
        } else {
          App.audio.play()
        }
        this.item.playing = !this.item.playing
      },
      progress () {
        App.audio.currentTime = this.item.current
      },
      next () {
        let targetIndex = App.allId.indexOf(this.item.id) + 1
        if (targetIndex >= App.allId.length) {
          targetIndex = 0
        }
        router.go({ name: 'item', params: { id: App.allId[targetIndex] } })
      },
      prev () {
        let targetIndex = App.allId.indexOf(this.item.id) - 1
        if (targetIndex < 0) {
          targetIndex = App.allId.length - 1
        }
        router.go({ name: 'item', params: { id: App.allId[targetIndex] } })
      }
    },
  })

  /**
   * 路由器用来分发每一次请求到不同的组件
   * @type {VueRouter}
   */
  const router = new global.VueRouter()

  router.map({
    '/home': {
      name: 'home',
      component: Home
    },
    '/songs': {
      name: 'list',
      component: Songs
    },
    '/songs/:id': {
      name: 'item',
      component: Player
    },
  })

  router.start(App, 'body')

})(this)
