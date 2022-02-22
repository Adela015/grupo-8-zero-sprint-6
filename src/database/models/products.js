'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Products.belongsTo(models.Categories,{
        foreignKey:'IDgenre',
        as: 'Categories'
      }),
      Products.belongsTo(models.Format,{
        foreignKey:'IDformat',
        as: 'Format'
      }),
      Products.belongsTo(models.Category,{
        foreignKey:'ID_category',
        as: 'Category'
      }),
      Products.belongsTo(models.Images,{
        foreignKey:'IDImages',
        as: 'Images'
      });
    }
  }
  Products.init({
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    stock: DataTypes.INTEGER,
    stock_min: DataTypes.INTEGER,
    stock_max: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    artist: DataTypes.STRING,
    visibility: DataTypes.INTEGER,
    IDgenre: DataTypes.INTEGER,
    IDformat: DataTypes.INTEGER,
    ID_category: DataTypes.INTEGER,
    IDImages: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Products',
  });
  return Products;
};