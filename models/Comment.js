const mongoose = require('mongoose')

const CommentSchema = mongoose.Schema({
    title: String,

    content: String,
})


const Comment = mongoose.model('Comment', CommentSchema)

module.exports = Comment