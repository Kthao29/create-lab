const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../config/connection');

class Category extends Model { }

Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    filename: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    project_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'project',
        key: 'id'
      }
    },
  },
{
  sequelize,
  freezeTableName: true,
  timestamps: false,
  underscored: true,
  modelName: 'category',
}

) 

module.exports = Category;


