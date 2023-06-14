const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return tbk_oneclick_data.init(sequelize, DataTypes);
}

class tbk_oneclick_data extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    tbkuser: {
      type: DataTypes.STRING(120),
      allowNull: false,
      primaryKey: true,
     // comment: "Identificador único de la insc"
    },
    internalid: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: Sequelize.UUIDV4,
     // comment: "Identificador interno unico (g"
    },
    authorizationcode: {
      type: DataTypes.STRING(12),
      allowNull: false,
     // comment: "Código que identifica la autor"
    },
    rut: {
      type: DataTypes.STRING(14),
      allowNull: false,
     // comment: "Rol Unico Tributario",
      references: {
        model: 'usuarios',
        key: 'rut'
      }
    },
    tbk_username: {
      type: DataTypes.STRING(40),
      allowNull: false,
     // comment: "Por restricciones de TBK, es n"
    },
    tbk_email: {
      type: DataTypes.STRING(330),
      allowNull: false,
     // comment: "Por restricciones de TBK, es n"
    },
    cardtype: {
      type: DataTypes.STRING(24),
      allowNull: false,
     // comment: "Indica el tipo de tarjeta insc"
    },
    cardnumber: {
      type: DataTypes.STRING(4),
      allowNull: false,
     // comment: "Últimos 4 dígitos de la tarjet"
    },
    status: {
      type: DataTypes.STRING(12),
      allowNull: false,
     // comment: "Estado del registro."
    }
  }, {
    sequelize,
    tableName: 'tbk_oneclick_data',
    // schema: 'dbo',
    timestamps: true,
    indexes: [
      {
        name: "datos_oneclickmall_fk",
        fields: [
          { name: "rut" },
        ]
      },
      {
        name: "pk_tbk_oneclick_data",
        unique: true,
        fields: [
          { name: "tbkuser" },
        ]
      },
    ]
  });
  return tbk_oneclick_data;
  }
}
