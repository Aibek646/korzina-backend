const express = require('express')
const router = express.Router()
const ctrl = require('../controllers')


router.post('/orders/:userId/:itemId', ctrl.user.addItem)

module.exports = router