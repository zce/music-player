const express = require('express')
const router = module.exports = express.Router()
router.prefix = '/demo'

/**
 * GET /demo/
 */
router.get('/', (req, res) => {
  res.send('1213')
})

/**
 * GET /demo/view
 */
router.get('/view', (req, res) => {
  res.render('demo')
})
