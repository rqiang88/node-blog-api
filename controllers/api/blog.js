const BaseController = require('./base');
const { Blog } = require('../../models');

class BlogController extends BaseController {
  async index(req, res) {
    let blogs = await Blog.findAll({
      attributes: ['id', 'name']
    });
    res.json(blogs);
  }

  async show(req,  res) {
    const { id } = req.params; 
    let blog = await Blog.findByPk(id);
    res.json(blog);
  }
}

module.exports = new BlogController;
