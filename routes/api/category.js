const CategoryController = require('../../controllers/api/category');
const express = require('express');

var router = express.Router();

router
  .get('/', CategoryController.index)
  .get('/:id', CategoryController.show);

module.exports = router;
