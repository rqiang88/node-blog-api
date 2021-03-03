const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Blog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Category, {
        foreignKey: 'categoryId'
      })
    }
  };
  Blog.init({
    categoryId: DataTypes.INTEGER,
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      notEmpty: true
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Blog',
  });
  return Blog;
};
