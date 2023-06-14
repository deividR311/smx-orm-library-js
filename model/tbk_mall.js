const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return tbk_mall.init(sequelize, DataTypes);
}

class tbk_mall extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    idtbkmall: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    rutorganizacion: {
      type: DataTypes.STRING(16),
      allowNull: false,
     // comment: "Rut de la empresa",
      references: {
        model: 'organizacion',
        key: 'rutorganizacion'
      }
    },
    cconeclickmall: {
      type: DataTypes.STRING(24),
      allowNull: false,
     // comment: "Codigo de comercio asignado al"
    },
    ccwebpayplusmall: {
      type: DataTypes.STRING(24),
      allowNull: false,
     // comment: "Codigo de comercio asignado al"
    },
    apikeyidoneclickmall: {
      type: DataTypes.STRING(24),
      allowNull: false,
     // comment: "El api-key-id, en principio, c"
    },
    apikeysecretoneclickmall: {
      type: DataTypes.STRING(200),
      allowNull: false,
     // comment: "Secreto asociado al api-key-id"
    },
    apikeyidwebpayplusmall: {
      type: DataTypes.STRING(24),
      allowNull: false
    },
    apikeysecretwebpayplusmall: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    status: {
      type: DataTypes.STRING(12),
      allowNull: false,
     // comment: "Estado del registro"
    },
    ocm_cc_capturadiferida: {
      type: DataTypes.STRING(24),
      allowNull: true,
     // comment: "CC captura diferida"
    },
    ocm_cc_capturasimultanea: {
      type: DataTypes.STRING(24),
      allowNull: true,
     // comment: "CC captura simultanea"
    },
    wpy_cc_capturadiferida: {
      type: DataTypes.STRING(24),
      allowNull: true,
     // comment: "WP CC captura diferida"
    },
    wpy_cc_capturasimultanea: {
      type: DataTypes.STRING(24),
      allowNull: true,
     // comment: "WP CC captura simultanea"
    }
  }, {
    sequelize,
    tableName: 'tbk_mall',
    // schema: 'dbo',
    timestamps: true,
    indexes: [
      {
        name: "org_tbk_mall_data_fk",
        fields: [
          { name: "rutorganizacion" },
        ]
      },
      {
        name: "pk_tbk_mall",
        unique: true,
        fields: [
          { name: "idtbkmall" },
        ]
      },
    ]
  });
  return tbk_mall;
  }
}
