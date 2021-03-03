const adminAdminRouter = require('./admin');
const adminSessionRouter = require('./session');
const adminCategoryRouter = require('./category');
const adminBlogRouter = require('./blog');

module.exports = (app) => {
  app.use('/admin/admins', adminAdminRouter);
  app.use('/admin/sessions', adminSessionRouter);
  app.use('/admin/categories', adminCategoryRouter);
  app.use('/admin/blogs', adminBlogRouter);
};


