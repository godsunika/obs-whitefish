'use strict';
const {vModel } = require('sequelize');
module.exports  = (sequelize, DataTypes) => {
  class Menu extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Menu.init({
    id: {
      type         : DataTypes.INTEGER,
      allowNull    : false,
      autoIncrement: true,
      primaryKey   : true
    },
    uid : {
      type        : DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull   : false,
    },
    name : {
      type        : DataTypes.STRING,
      allowNull   : false,
    },
    created_at : {
      type        : 'TIMESTAMP',
      allowNull   : false,
    },
    updated_at : {
      type        : 'TIMESTAMP',
      allowNull   : false,
    },
    deleted_at : {
      type        : 'TIMESTAMP',
      allowNull   : true,
    }
  }, {
    sequelize,
    timestamps: false,
    modelName : 'Menu',
  });
  return Menu;
};