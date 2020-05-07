const db = require('../models')


const view = (req, res) => {
    db.Item.find({}, (err, allItems) => {
        if (err) return res.status(500).json({
            status: 500,
            message: 'Something went wrong. Please try again.'
        })
        return res.json(allItems)
    })
}



module.exports = {
    view,
}