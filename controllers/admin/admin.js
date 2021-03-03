const { Admin } = require('../../models');
const BaseController = require('./base');

class AdminController extends BaseController {
  async index(req, res) {
    let categories = await Admin.findAll({
      order: [['id', 'desc']],
      attributes: ['id', 'name', 'account']
    });
    res.json(categories);
  }

  async show(req, res) {
    const { id } = req.params;
    let admin = await Admin.findByPk(id);
    res.json(admin);
  }

  async create(req, res) {
    const { name, account, password } = req.body;
    console.log(req.body);
    let admin = await Admin.create({ name, account, password });
    res.json(admin);
  }

  async update(req, res){
    const { id } = req.params;
    const { name, account, password } = req.body;
    let admin = await Admin.findByPk(id);
    await admin.update({ name, account, password });
    res.json(admin);
  }
}

module.exports = new AdminController;
