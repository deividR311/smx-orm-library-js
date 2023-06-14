const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return producttable_item.init(sequelize, DataTypes);
}

class producttable_item extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    idproducttable: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
     // comment: "Indice unico. Corresponde a la",
      references: {
        model: 'producttable',
        key: 'idproducttable'
      }
    },
    productno: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
     // comment: "Numero de producto"
    },
    productname: {
      type: DataTypes.STRING(20),
      allowNull: false,
     // comment: "Nombre del producto"
    },
    productum: {
      type: DataTypes.STRING(20),
      allowNull: true,
     // comment: "Descripcion larga de la unidad"
    },
    umshort: {
      type: DataTypes.STRING(16),
      allowNull: true,
     // comment: "Descripcion corta de la unidad"
    }
  }, {
    sequelize,
    tableName: 'producttable_item',
    // schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "items_productable_fk",
        fields: [
          { name: "idproducttable" },
        ]
      },
      {
        name: "pk_producttable_item",
        unique: true,
        fields: [
          { name: "productno" },
          { name: "idproducttable" },
        ]
      },
    ]
  });
  return producttable_item;
  }
}
