const mongoose = require('mongoose')
const Comment = require('./Comment')

const ItemSchema = mongoose.Schema({

    name: String,

    description: String,

    image: String,
    
    image2: String,

    createdAt: String,

    color: String,

    color2: String,

    price: String,

    comments: [Comment.schema],
})

 const Item = mongoose.model('Item', ItemSchema)

 module.exports = Item
