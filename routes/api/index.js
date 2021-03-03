const apiCategoryRouter = require('./category');
const apiBlogRouter = require('./blog');

module.exports = (app) => {
  app.use('/api/categories', apiCategoryRouter);
  app.use('/api/blogs', apiBlogRouter);
};


