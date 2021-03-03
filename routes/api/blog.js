const BlogController = require('../../controllers/api/blog');
const express = require('express');

var router = express.Router();

router
  .get('/', BlogController.index)
  .get('/:id', BlogController.show)

module.exports = router;
