(function (global) {
  /**
   * 加载模版内容
   * @param  {string} id 模版ID
   * @return {string}    模版内容
   */
  var loadTemplate = function (id) {
    return document.getElementById(id + '_tmpl').innerHTML
  }

  /**
   * 整个应用程序模块
   * @type {Vue}
   */
  var App = global.Vue.extend({})

  /**
   * 首页组件
   * @type {Vue}
   */
  var Home = global.Vue.extend({
    template: loadTemplate('home')
  })

  /**
   * 歌曲列表组件
   * @type {Vue}
   */
  var Songs = global.Vue.extend({
    template: loadTemplate('list')
  })

  /**
   * 播放器组件
   * @type {Vue}
   */
  var Player = global.Vue.extend({
    template: loadTemplate('item')
  })

  /**
   * 路由器用来分发每一次请求到不同的组件
   * @type {VueRouter}
   */
  var router = new global.VueRouter()

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
