;
(function (angular) {
  // 定义一个NG模块管理应用程序，第二个参数必须要传递，否则变为获取已经有的模块
  // 使用路由
  // 1. 添加依赖
  angular.module('musicApp', ['ngRoute'])
    // 2. 通过module的config方法配置路由信息
    .config(['$routeProvider', function ($routeProvider) {
      $routeProvider
        .when('/home', {
          controller: 'HomeController',
          templateUrl: 'home'
        })
        .when('/list', {
          controller: 'ListController',
          templateUrl: 'list'
        })
        .when('/item/:id', {
          controller: 'ItemController',
          templateUrl: 'item'
        })
        .otherwise({ redirectTo: '/home' })
    }])
    // 对应的控制器和视图写好  → 在需要切换的位置加上ng-view
    .controller('HomeController', ['$scope', function ($scope) {}])
    .controller('ListController', ['$scope', '$http', function ($scope, $http) {
      // 控制器的职责是：
      //  数据初始化（计算、ajax）操作（$http）
      $scope.data = {}
        //  在NG中使用jsonp请求回调函数名字是自动生成的，可以用JSON_CALLBACK作为占位符
        //  http://localhost:2080/api/music?callback=angular.callbacks._0
        //  http://localhost:2080/api/music?cbsdf=angular.callbacks._0&sd=1231
      $http.jsonp('http://localhost:2080/api/music?callback=JSON_CALLBACK')
        .then(res => {
          $scope.data.list = res.data
        })
        .catch(console.log)
        //  行为操作初始化
      $scope.action = {}
        //  $watch
    }])
    // this
    .controller('ItemController', ['$scope', '$routeParams', '$http', function ($scope, $routeParams, $http) {
      window.audio && window.audio.pause()
      window.audio = new Audio()
      $scope.data = {}
      $scope.data.item = {}
      $scope.data.playing = false
      $scope.data.duration = 0
      $scope.data.current = 0
      $http.jsonp('http://localhost:2080/api/music/' + $routeParams.id + '?callback=JSON_CALLBACK')
        .then(res => {
          $scope.data.item = res.data
            // 获取到音乐文件的url, 开始播放
          audio.src = $scope.data.item.music
          audio.autoplay = true
          audio.addEventListener('playing', () => {
            $scope.data.playing = true
            $scope.$apply()
          })
          audio.addEventListener('loadedmetadata', () => {
            $scope.data.duration = audio.duration
            $scope.$apply()
          })
          audio.addEventListener('timeupdate', () => {
            $scope.data.current = audio.currentTime
            $scope.$apply()
          })
        })
        .catch(console.log)

      $scope.action = {}
      $scope.action.play = () => {
        $scope.data.playing ? audio.pause() : audio.play()
        $scope.data.playing = !$scope.data.playing
      }
      $scope.action.prev = () => {

      }
      $scope.action.next = () => {

      }
      $scope.action.convert = (second) => {
        function pad(num, n) {
          return (Array(n).join(0) + num).slice(-n)
        }
        var h = Math.floor(second / 3600)
        var m = Math.floor(second % 3600 / 60)
        var s = Math.floor(second % 60)
        return h ? `${pad(h, 2)}:${pad(m, 2)}:${pad(s, 2)}` : `${pad(m, 2)}:${pad(s, 2)}`
      }
      $scope.action.progress = () => {
        audio.currentTime = $scope.data.current
      }
    }])
})(angular)
