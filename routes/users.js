/* eslint-disable consistent-return */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable no-underscore-dangle */
const router = require('express').Router();
const path = require('path');
const fs = require('fs');

let users;
fs.readFile(path.join(__dirname, '../data/users.json'), { encoding: 'utf8' }, (err, data) => {
  if (!err) {
    try {
      users = JSON.parse(data);
    } catch (error) {
      console.error(error);
      users = JSON.parse('[]');
    }
  }
});
router.get('/users', (req, res) => {
  res.send(users);
});
router.get('/users/:id', (req, res) => {
  const user = users.find((elem) => elem._id === req.params.id);

  if (!user) {
    return res.send(404, { message: 'Нет пользователя с таким id' });
  }
  res.send(user);
});
module.exports = router;
