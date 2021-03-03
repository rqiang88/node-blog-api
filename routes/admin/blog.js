const BlogController = require('../../controllers/admin/blog');
const auth = require('../../middlewares/auth');
const express = require('express');

var router = express.Router();
// router.use(auth.check);

router
  .get('/', BlogController.index)
  .get('/:id', BlogController.show)
  .post('/', BlogController.create)
  .put('/:id', BlogController.update)
  .delete('/:id', BlogController.destroy);;

module.exports = router;
