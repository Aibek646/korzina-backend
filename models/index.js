const mongoose = require('mongoose')
const dbUrl = process.env.MONGO_URI



mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true
})
   .then(() => console.log('MongoDB connected....'))
   .catch(err => console.log('MongoDV connection error: ', err))


module.exports = {
    User: require('./User'),
    Item: require('./Item'),
    Comment: require('./Comment'),
}