/* eslint-disable import/no-dynamic-require */
const router = require('express').Router();
const path = require('path');
const fs = require('fs');

let cards;
fs.readFile(path.join(__dirname, '../data/cards.json'), { encoding: 'utf8' }, (err, data) => {
  if (!err) {
    try {
      cards = JSON.parse(data);
    } catch (error) {
      console.error(error);
      cards = JSON.parse('[]');
    }
  }
});
router.get('/cards', (req, res) => {
  res.send(cards);
});
module.exports = router;
