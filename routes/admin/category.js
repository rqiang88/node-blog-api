const CategoryController =  require('../../controllers/admin/category');
const auth = require('../../middlewares/auth');
const express = require('express');

var router = express.Router();
// router.use(auth.check);

router
  .get('/', CategoryController.index)
  .get('/:id', CategoryController.show)
  .post('/', CategoryController.create)
  .put('/:id', CategoryController.update)
  .delete('/:id', CategoryController.destroy);

module.exports = router;

