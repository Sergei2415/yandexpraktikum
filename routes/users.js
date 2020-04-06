/* eslint-disable import/no-dynamic-require */
/* eslint-disable no-underscore-dangle */
const router = require('express').Router();
const path = require('path');
const fs = require('fs');

let users;
fs.readFile(path.join(__dirname, '../data/users.json'), { encoding: 'utf8' }, (err, data) => {
  users = JSON.parse(data);
});
router.get('/users', (req, res) => {
  res.send(users);
});
router.get('/users/:id', (req, res) => {
  for (let index = 0; index < users.length; index += 1) {
    if (users[index]._id === req.params.id) return res.send(users[index]);
  }
  return res.send(404, { message: 'Нет пользователя с таким id' });
});
module.exports = router;
