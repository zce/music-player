const express = require('express')
const router = module.exports = express.Router()
router.prefix = '/'

/**
 * GET /
 */
router.get('/', (req, res) => {
  res.redirect('/music/list')
})
