
  
const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {

  let alias = "Product";

  let cols = {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    product_name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    brand: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    gender: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    category_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'categories',
        key: 'id'
      }
    },
    price: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: false
    },
    size: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 1
    },
    product_image: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: "product3.jpg"
    }
  }

  let config = {
    tableName: 'products',
    timestamps: false,
  }

  let Product = sequelize.define(alias,cols,config);

  Product.associate = function( models ){
    Product.belongsTo(models.Category, {
      as:"category",
      foreignKey:"category_id"
    })
  }

  return Product



  
};
