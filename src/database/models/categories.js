const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  const Category = sequelize.define(
    "categories",
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
      },
      category_name: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: "categories",
      timestamps: false,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "id" }],
        },
      ],
    }
  );

  Category.associate = function (models) {
    Category.hasMany(models.products, {
      as: "product",
      foreignKey: "category_id",
    });
  };

  return Category;
};
