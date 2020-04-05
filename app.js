const express = require('express');
const path = require('path');
const cardrouter = require('./routes/cards');
const userrouter = require('./routes/users');

const { PORT = 3000 } = process.env;
const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.use(cardrouter);
app.use(userrouter);
app.get("/:address",(req, res) => {res.send(404,{ "message": "Запрашиваемый ресурс не найден" })})
app.listen(PORT, () => {});
