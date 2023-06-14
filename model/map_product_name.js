const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return map_product_name.init(sequelize, DataTypes);
}

class map_product_name extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    fusion_productname: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true,
     // comment: "Nombre del producto informado "
    },
    ie_productname: {
      type: DataTypes.STRING(20),
      allowNull: false,
     // comment: "nombre del producto informado informado en impuesto especifico"
    },
    frontend_productname: {
      type: DataTypes.STRING(20),
      allowNull: false,
     // comment: "Nombre del producto a retornar para el frontend"
    },
    dte_productname: {
      type: DataTypes.STRING(20),
      allowNull: false,
     // comment: "Nombre del producto para desplegar en dte"
    }
  }, {
    sequelize,
    tableName: 'map_product_name',
    // schema: 'dbo',
    timestamps: true,
    indexes: [
      {
        name: "pk_map_product_name",
        unique: true,
        fields: [
          { name: "fusion_productname" },
        ]
      },
    ]
  });
  return map_product_name;
  }
}
