const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return tbk_store.init(sequelize, DataTypes);
}

class tbk_store extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    idtbkstore: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    ideess: {
      type: DataTypes.STRING(14),
      allowNull: false,
     // comment: "Identificador de la estacion d",
      references: {
        model: 'ee_ss',
        key: 'ideess'
      }
    },
    cconeclickmall: {
      type: DataTypes.STRING(24),
      allowNull: false,
     // comment: "Codigo de comercio asignado po"
    },
    ccwebpayplusmall: {
      type: DataTypes.STRING(24),
      allowNull: false,
     // comment: "Codigo de comercio asignado po"
    },
    status: {
      type: DataTypes.STRING(12),
      allowNull: false
    },
    ocm_cc_capturadiferida: {
      type: DataTypes.STRING(24),
      allowNull: true
     // comment: "CC captura diferida"
    },
    ocm_cc_capturasimultanea: {
      type: DataTypes.STRING(24),
      allowNull: true
     // comment: "CC captura simultanea"
    },
    wpy_cc_capturadiferida: {
      type: DataTypes.STRING(24),
      allowNull: true
     // comment: "WP CC captura diferida"
    },
    wpy_cc_capturasimultanea: {
      type: DataTypes.STRING(24),
      allowNull: true
     // comment: "WP CC captura simultanea"
    }
  }, {
    sequelize,
    tableName: 'tbk_store',
    // schema: 'dbo',
    timestamps: true,
    indexes: [
      {
        name: "eess_tbk_store_fk",
        fields: [
          { name: "ideess" },
        ]
      },
      {
        name: "pk_tbk_store",
        unique: true,
        fields: [
          { name: "idtbkstore" },
        ]
      },
    ]
  });
  return tbk_store;
  }
}
