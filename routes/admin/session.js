const SessionController = require('../../controllers/admin/session');
const auth = require('../../middlewares/auth');
const express = require('express');
var router = express.Router();

router
  .post('/', SessionController.create)
  .delete('/', auth.check, SessionController.destroy);

module.exports = router;
