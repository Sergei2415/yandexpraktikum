const router = require('express').Router();
const path = require('path');
const users = require(path.join(__dirname,'../data/users.json'));


router.get('/users', (req, res) => {
    res.send(users);
  });
router.get('/users/:id', (req, res) => {
    if(!users[req.params.id]){
       
      res.send(404,{ "message": "Нет пользователя с таким id" })
       return
    }
    res.send(users[req.params.id]);
    
         
  
  
      
  });


module.exports = router;