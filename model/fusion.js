const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return fusion.init(sequelize, DataTypes);
}

class fusion extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    ideess: {
      type: DataTypes.STRING(14),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'ee_ss',
        key: 'ideess'
      }
    },
    nickname: {
      type: DataTypes.STRING(128),
      allowNull: false,
     // comment: "Opcional. Nombre de fantasia d"
    },
    ip: {
      type: DataTypes.STRING(40),
      allowNull: false,
     // comment: "Número ip en donde se encuentr"
    },
    port: {
      type: DataTypes.INTEGER,
      allowNull: false,
     // comment: "Puerto de escucha del servidor"
    },
    passphrase: {
      type: DataTypes.STRING(64),
      allowNull: false,
     // comment: "passphrase a utilizar para la "
    },
    status: {
      type: DataTypes.STRING(12),
      allowNull: true,
     // comment: "Estado del registro."
    }
  }, {
    sequelize,
    tableName: 'fusion',
    // schema: 'dbo',
    timestamps: true,
    indexes: [
      {
        name: "pk_fusion",
        unique: true,
        fields: [
          { name: "ideess" },
        ]
      },
    ]
  });
  return fusion;
  }
}
