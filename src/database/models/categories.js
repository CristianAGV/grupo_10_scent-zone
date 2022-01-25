const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {


  let alias = "Category"

  let cols = {

    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    category_name: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
    
  }

  let config = {
    tableName: 'categories',
    timestamps: false,
  }

  let Category = sequelize.define(alias, cols, config);

  Category.associate = function( models ){
    Category.hasMany(models.Product, {
      as:"product",
      foreignKey:"category_id"
    })
  }

  return Category;
 
};