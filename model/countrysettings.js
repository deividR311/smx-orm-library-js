const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return countrysettings.init(sequelize, DataTypes);
}

class countrysettings extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    idcountrysettings: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
     // comment: "Identificador unico de los dat"
    },
    ideess: {
      type: DataTypes.STRING(14),
      allowNull: false,
      references: {
        model: 'fusion',
        key: 'ideess'
      },
      unique: "ak_ux_alternate_key_countrys"
    },
    fdctimestamp: {
      type: DataTypes.DATE,
      allowNull: false,
     // comment: "Timestamp del mensaje informad",
      unique: "ak_ux_alternate_key_countrys"
    },
    volumeunit: {
      type: DataTypes.STRING(10),
      allowNull: true,
     // comment: "Unidad de volumen"
    },
    currencycode: {
      type: DataTypes.STRING(3),
      allowNull: true,
     // comment: "Codigo de moneda"
    },
    levelunit: {
      type: DataTypes.STRING(4),
      allowNull: true,
     // comment: "Unidad de medida."
    },
    temperatureunit: {
      type: DataTypes.STRING(3),
      allowNull: true,
     // comment: "Unidad de temperatura"
    },
    countrycode: {
      type: DataTypes.STRING(4),
      allowNull: true,
     // comment: "Codigo de pais"
    },
    thousanddelimiter: {
      type: DataTypes.STRING(2),
      allowNull: true,
     // comment: "Delimitador de miles"
    },
    decimalsign: {
      type: DataTypes.STRING(2),
      allowNull: true,
     // comment: "Signo decimal"
    },
    languagecode: {
      type: DataTypes.STRING(4),
      allowNull: true,
     // comment: "Codigo de lenguaje"
    },
    status: {
      type: DataTypes.STRING(12),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'countrysettings',
    // schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "ak_ux_alternate_key_countrys",
        unique: true,
        fields: [
          { name: "ideess" },
          { name: "fdctimestamp" },
        ]
      },
      {
        name: "countrysettings_fusion_fk",
        fields: [
          { name: "ideess" },
        ]
      },
      {
        name: "pk_countrysettings",
        unique: true,
        fields: [
          { name: "idcountrysettings" },
        ]
      },
    ]
  });
  return countrysettings;
  }
}
