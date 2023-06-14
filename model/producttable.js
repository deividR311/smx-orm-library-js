const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return producttable.init(sequelize, DataTypes);
}

class producttable extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    idproducttable: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
     // comment: "Identificador unico (autoincre"
    },
    ideess: {
      type: DataTypes.STRING(14),
      allowNull: false,
      references: {
        model: 'fusion',
        key: 'ideess'
      },
      unique: "ak_ux_producttable_productt"
    },
    fdctimestamp: {
      type: DataTypes.DATE,
      allowNull: false,
     // comment: "Timestamp de la respuesta de f",
      unique: "ak_ux_producttable_productt"
    },
    status: {
      type: DataTypes.STRING(12),
      allowNull: false,
     // comment: "Estado del registro"
    }
  }, {
    sequelize,
    tableName: 'producttable',
    // schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "ak_ux_producttable_productt",
        unique: true,
        fields: [
          { name: "ideess" },
          { name: "fdctimestamp" },
        ]
      },
      {
        name: "pk_producttable",
        unique: true,
        fields: [
          { name: "idproducttable" },
        ]
      },
      {
        name: "productos_fusion_fk",
        fields: [
          { name: "ideess" },
        ]
      },
    ]
  });
  return producttable;
  }
}
