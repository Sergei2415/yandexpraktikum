/* eslint-disable import/no-dynamic-require */
const router = require('express').Router();
const path = require('path');
const fs = require('fs');

let cards;
fs.readFile(path.join(__dirname, '../data/cards.json'), { encoding: 'utf8' }, (err, data) => {
  cards = JSON.parse(data);
});
router.get('/cards', (req, res) => {
  res.send(cards);
});
module.exports = router;
