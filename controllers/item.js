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

const showItem = (req, res) => {
    db.Item.findById(req.params.id, (err, Item) => {
        if(err) return res.status(500).json({
            status: 500,
            message: 'Something went wrong. Please try again.'
        })
        return res.json(Item)
    })
}

const newComment = (req, res) => {
    db.Comment.create(req.body, (err, newComment) => {
        if(err){
            return res.status(400).json({ status: 400, error: 'Something went wrong' });
        }
       db.Item.findById(req.params.itemId, (err, foundItem) => {
           if (err) {
               return res.status(400).json({ status: 400, error: 'Something went wrond' })
           }
           foundItem.comments.push(newComment);
           foundItem.save((err, savedComment) => {
               if (err) {
                   return res.status(400).json({ status: 400, error: 'Something is wrong' });
               }
           })
        db.User.findById(req.params.userId, (err, foundUser) => {
            foundUser.comments.push(newComment);
            foundUser.save((err, savedComment) => {
                if(err) {
                    return res.status(400).json({ status: 400, error: 'Something is wrong'});
                }
                res.json(foundItem.comments)
            })
        })   
       })
    })
}


const getComment = (req ,res) => {
     db.Item.findById(req.params.itemId, (err, foundItem) => {
         if (err) {
             return res.status(400).json({ status: 400, error: 'Something went wrong' })
         }
         res.json(foundItem.comments)
     })
}

const deleteComment = (req, res) => {
    db.Item.findById(req.params.itemId, (err, foundItem) => {
        if(err) {
            return res.status(400).json({status: 400, error: 'Something went wrong'})
        }
        const commentToDelete = foundItem.comments.id(req.params.commentId)

        if(!commentToDelete){
            return res.status(400).json({status: 400, error: 'Could not find post'});
        }

        commentToDelete.remove();

        foundItem.save((err, savedItem) => {
            if(err) {
                return res.status(400).json({ status: 400, error: 'Something went wrong, please try again' });
            }
            res.json(savedItem)
        })
    })
}



module.exports = {
    view,
    showItem,
    newComment,
    getComment,
    deleteComment,
}