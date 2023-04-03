'use strict'

const express = require('express');
const capitalize = require('./modules/capitalize');
const cors = require('cors');

const app = express();

app.use(cors());


app.get('/lemme-cap', function(req, res, next) {

  if (req.query.message) {
    let uppMessage = capitalize(req.query.message);
    res.send(uppMessage);
  } else {
    res.send('You Sussy Baka');
  }
});

module.exports = app;
