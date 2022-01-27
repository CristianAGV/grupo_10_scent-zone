const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
const Product = sequelize.define('products', {
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
      type: DataTypes.FLOAT,
      allowNull: false
    },
    size: {
      type: DataTypes.FLOAT,
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
  }, {
    sequelize,
    tableName: 'products',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "products_category_id_FK",
        using: "BTREE",
        fields: [
          { name: "category_id" },
        ]
      },
    ]
  })

  Product.associate = function( models ){
    Product.belongsTo(models.categories, {
      as:"category",
      foreignKey:"category_id"
    })
  };
  return Product;
};
