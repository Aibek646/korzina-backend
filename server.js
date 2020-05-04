const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session);
const cors = require('cors')
require('dotenv').config()
const db = require('./models')
const routes = require('./routes')


//MIDDLEWARE
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

//Express Session - Authentication
app.use(session({
    store: new MongoStore({ 
        url: process.env.MONGO_URI,
     }),
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false, // Only create a session if a property has been added to the session
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7 // cookie will expire in 1 week
    }
}))

//ROUTES --------------------------- //

app.get('/', (req, res) => {
    console.log(req.session)
    res.send('<h1>Server works<h1>')
})

app.use('/api/v1/auth', routes.auth)


app.listen(3001, () => {
    return console.log(`Server is running at http://localhost:3001`)
})