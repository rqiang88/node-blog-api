const AdminController = require('../../controllers/admin/admin');
const auth = require('../../middlewares/auth');
const express = require('express');

var router = express.Router();
router.use(auth.check);

router
  .get('/', AdminController.index)
  .get('/:id', AdminController.show)
  .post('/', AdminController.create)
  .put('/:id', AdminController.update);

module.exports = router;
