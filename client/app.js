/**
 * 整个应用程序模块
 * @type {Vue}
 */
var App = Vue.extend({})

/**
 * 首页组件
 * @type {Vue}
 */
var Home = Vue.extend({
  template: '<h1>Home</h1>'
})

/**
 * 歌曲列表组件
 * @type {Vue}
 */
var Songs = Vue.extend({
  template: '<h1>Songs</h1>'
})

/**
 * 播放器组件
 * @type {Vue}
 */
var Player = Vue.extend({
  template: '<h1>Player</h1>'
})

/**
 * 路由器用来分发每一次请求到不同的组件
 * @type {VueRouter}
 */
var router = new VueRouter()

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


// router.on('/home', {
//   component: {
//     template: `<img src="assets/img/home.png" alt="" width="100%">`
//   }
// })

// router.on('/date', {
//   component: {
//     template: `<h1>${new Date}</h1><p>{{stringify($route)}}</p>`,
//     methods: {
//       stringify: JSON.stringify
//     }
//   }
// })

// router.redirect({
//   '*': '/home'
// })
