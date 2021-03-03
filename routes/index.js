const apiRouter = require('./api');
const adminRouter = require('./admin');

const express = require('express');
var router = express.Router();

router
  .get('/', (req, res, next) => {
    res.status(200).json({ xue: 'hai' });
  })

module.exports = (app) => {
  apiRouter(app);
  adminRouter(app);
};

