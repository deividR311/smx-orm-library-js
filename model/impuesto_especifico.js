const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return impuesto_especifico.init(sequelize, DataTypes);
}

class impuesto_especifico extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    idimpuestoespecifico: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
     // comment: "Identificador autoincremental"
    },
    taxtype: {
      type: DataTypes.STRING(12),
      allowNull: false
    },
    province: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    valuetype: {
      type: DataTypes.STRING(12),
      allowNull: false
    },
    value: {
      type: DataTypes.STRING(14),
      allowNull: false
    },
    taxableamount: {
      type: DataTypes.STRING(12),
      allowNull: false
    },
    minimumtaxrate: {
      type: DataTypes.STRING(14),
      allowNull: false
    },
    glosa: {
      type: DataTypes.STRING(84),
      allowNull: false
    },
    validodesde: {
      type: DataTypes.DATE,
      allowNull: false
    },
    validohasta: {
      type: DataTypes.DATE,
      allowNull: false
    },
    status: {
      type: DataTypes.STRING(12),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'impuesto_especifico',
    // schema: 'dbo',
    timestamps: true,
    indexes: [
      {
        name: "pk_impuesto_especifico",
        unique: true,
        fields: [
          { name: "idimpuestoespecifico" },
        ]
      },
    ]
  });
  return impuesto_especifico;
  }
}
