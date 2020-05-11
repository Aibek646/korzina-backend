const db = require('../models')


const addItem = (req, res) => {
   db.User.findById(req.params.userId, (err, foundUser) => {
       if (err) {
           return res.status(400).json({ status: 400, error: 'Something went wrong' });
       }
       db.Item.findById(req.params.itemId, (err, foundItem) => {
           if (err) {
               return res.status(400).json({ status: 400, error: 'Something went wrong' });
           }
           foundUser.item.push(foundItem);
           foundUser.save((err, savedUser) => {
               if (err) {
                   return res.status(400).json({ status: 400, error: 'Something is wrong' });
               }
               res.json(savedUser)
           })
           
       })
     
   })
  
 
}


module.exports = {
    addItem,
}