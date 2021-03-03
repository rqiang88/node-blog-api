class Auth {
  check(req, res, next) {
    if (req.session.token) {
      next();
    } else {
      return res.json({ code: 401, msg: 'please sign' })
    }
  }
};

module.exports = new Auth;
