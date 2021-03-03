const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Blog, {
        foreignKey: 'categoryId'
      });
    }

  };
  Category.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      notEmpty: true,
      unique: true, 
    },
  }, {
    sequelize,
    modelName: 'Category',
  });
  return Category;
};
