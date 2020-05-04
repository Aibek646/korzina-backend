const mongoose = require('mongoose')
const Comment = require('./Comment')

const ItemSchema = mongoose.Schema({

    name: String,

    description: String,

    image: String,

    createdAt: String,

    Color: String,

    comments: [Comment.schema],
})

 const Item = mongoose.model('Item', ItemSchema)

 module.exports = Item
