const BaseController = require('./base.js');
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

  async create(req, res) {
    const { title, content, categoryId,status } = req.body;
    let blog = await Blog.create({ title, content, categoryId, status });
    res.json(blog);
  }

  async update(req, res) {
    const { title, content, categoryId, status } = req.body;
    const { id } = req.params;
    let blog = await Blog.findByPk(id);
    await blog.update({ title, content, categoryId, status });
    res.json(blog);
  }

  async destroy(req, res) {
    const { id } = req.query;
    let blog = await Blog.findByPk(id);
    await blog.destroy();
    res.json({ msg: 'deleted success' });
  }
}

module.exports = new BlogController;
