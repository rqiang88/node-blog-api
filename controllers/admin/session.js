const BaseController = require('./base');
const { Admin } = require('../../models');

class SessionController extends BaseController {
  async create(req, res) {
    const { account, password } = req.body;
    let admin = await Admin.findOne({
      where: {
        account
      }
    })

    if (admin.signPassword(password)) {
      req.session.token = admin.token;
      res.json({ token: admin.token })
    } else {
      res.json({ msg: 'account or password error !!!' })
    }
  }

  async destroy(req, res) {
    res.json({ msg: 'account or password error !!!' })
  }
}

module.exports =  new SessionController;
