const { Model } = require('sequelize');
const crypto = require('crypto');

module.exports = (sequelize, DataTypes) => {
  class Admin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }

    generateSign(password) {
      const hash = crypto.createHash('MD5');
      hash.update(password);
      return hash.digest('hex');
    }

    signPassword(password) {
      const sign = this.generateSign(password);
      return this.password === sign;
    }

    resetToken() {
      let key = 'blog' +  Date.now().toString();
      this.token = this.generateSign(key).substring(0, 16);
    }
  };
  Admin.init({
    name: DataTypes.STRING,
    account: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      set(value) {
        this.setDataValue('password', this.generateSign(value));
      }
    },
    token: {
      type: DataTypes.STRING,
    }
  }, {
    hooks: {
      beforeCreate: (admin) => {
        admin.resetToken();
      }
    },
    sequelize,
    modelName: 'Admin',
  });
  return Admin;
};
