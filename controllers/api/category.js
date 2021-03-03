const BaseController = require('./base');
const { Category } = require('../../models');

class CategoryController extends BaseController {
  async index(req, res) {
    let categories = await Category.findAll({
      order: [['id', 'desc']],
      attributes: ['id', 'name']
    });
    res.json(categories);
  }

  async show(req, res) {
    const { id } = req.params;
    let category = await Category.findByPk(id);
    res.json(category);
  }

  async create(req, res) {
    const { name } = req.body;
    let category = await Category.create({ name });
    res.json(category);
  }

  async update(req, res){
    const { id } = req.params;
    const { name } = req.body;
    let category = await Category.findByPk(id);
    await category.update({ name });
    res.json(category);
  }
}

module.exports = new CategoryController;
