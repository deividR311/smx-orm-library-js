const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return fuelprice.init(sequelize, DataTypes);
}

class fuelprice extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    idproductsdsp: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
     // comment: "Identificador unico (autoincre",
      references: {
        model: 'products_dsp',
        key: 'idproductsdsp'
      }
    },
    modeno: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      primaryKey: true,
     // comment: "Modo"
    },
    price: {
      type: DataTypes.DOUBLE,
      allowNull: false,
     // comment: "Precio"
    }
  }, {
    sequelize,
    tableName: 'fuelprice',
    // schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "pk_fuelprice",
        unique: true,
        fields: [
          { name: "idproductsdsp" },
          { name: "modeno" },
        ]
      },
      {
        name: "precios_modo_fk",
        fields: [
          { name: "idproductsdsp" },
        ]
      },
    ]
  });
  return fuelprice;
  }
}
