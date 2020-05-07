const mongoose = require('mongoose')
const Comment = require('./Comment')
const Item = require('./Item')


const UserSchema = mongoose.Schema({
    name: String,

    username: {
        type: String,
        required: [true, 'Name is required'],
        unique: true,
    },

    password: {
        type: String,
        required: [true, 'Password is required']
    },

    createdAt : {
        type: Date,
        default: Date.now
    },

    comments: [Comment.schema],

    item: [Item.schema],
})


const User = mongoose.model('User', UserSchema)

module.exports = User