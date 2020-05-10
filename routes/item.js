const express = require('express')
const router = express.Router()
const ctrl = require('../controllers')

router.get('/all', ctrl.item.view)
router.get('/all/showitem/:id', ctrl.item.showItem)
router.post('/all/showitem/:itemId/comment/:userId', ctrl.item.newComment)
router.get('/all/showitem/:itemId', ctrl.item.getComment)
router.delete('/all/showitem/:itemId/:commentId', ctrl.item.deleteComment)


module.exports = router