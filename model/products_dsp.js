const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return products_dsp.init(sequelize, DataTypes);
}

class products_dsp extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    idproductsdsp: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
     // comment: "Identificador unico (autoincre"
    },
    iddsps: {
      type: DataTypes.BIGINT,
      allowNull: false,
     // comment: "Identificador unico (autoincre",
      references: {
        model: 'dsps',
        key: 'iddsps'
      },
      unique: "ak_ux_products_dsp_products"
    },
    productno: {
      type: DataTypes.SMALLINT,
      allowNull: false,
     // comment: "Numero de producto",
      unique: "ak_ux_products_dsp_products"
    },
    productname: {
      type: DataTypes.STRING(20),
      allowNull: false,
     // comment: "Nombre del producto",
      unique: "ak_ux_products_dsp_products"
    },
    productcolour: {
      type: DataTypes.STRING(8),
      allowNull: true,
     // comment: "Color que identifica al produc"
    }
  }, {
    sequelize,
    tableName: 'products_dsp',
    // schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "ak_ux_products_dsp_products",
        unique: true,
        fields: [
          { name: "iddsps" },
          { name: "productno" },
          { name: "productname" },
        ]
      },
      {
        name: "pk_products_dsp",
        unique: true,
        fields: [
          { name: "idproductsdsp" },
        ]
      },
      {
        name: "productos_dispensador_fk",
        fields: [
          { name: "iddsps" },
        ]
      },
    ]
  });
  return products_dsp;
  }
}
