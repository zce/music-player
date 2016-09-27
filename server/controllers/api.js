const express = require('express')

const Music = require('../models/music')

const router = module.exports = express.Router()

router.prefix = '/api'

/**
 * GET /api/music
 */
router.get('/music', (req, res) => {
  // JSONP在当下的WEB开发过程中经常用到，express就是将经常用到的东西进行封装
  // res.send(`${req.query.cb} && ${req.query.cb}(${JSON.stringify(Music.getList())})`)
  // res.send(`foo(${Music.getList()})`)
  // 如果是自己写 必须设置响应的响应类型
  // jsonp方法中会自动接收客户端传来的回调函数名称
  const list = Music.find()
  res.jsonp(list.map(item => {
    const temp = {}
    Object.assign(temp, item)
    // lodash
    temp.music = req.app.get('url') + '/uploads/' + temp.music
    temp.poster = req.app.get('url') + '/uploads/' + temp.poster
    temp.lyric = req.app.get('url') + '/uploads/' + temp.lyric
    return temp
  }))
})

/**
 * GET /api/music/:id
 */
router.get('/music/:id', (req, res) => {
  const id = parseInt(req.params.id || 0)
  if (!id) {
    // 不存在这个数据
    return res.status(404).send('没有该记录')
  }
  const item = Music.findOne(id)
  if (!item) {
    // 不存在这个数据
    return res.status(404).send('没有该记录')
  }
  const temp = {}
  Object.assign(temp, item)
  temp.music = req.app.get('url') + '/uploads/' + temp.music
  temp.poster = req.app.get('url') + '/uploads/' + temp.poster
  temp.lyric = req.app.get('url') + '/uploads/' + temp.lyric
  res.jsonp(temp)
})
