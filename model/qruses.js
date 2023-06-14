const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return qruses.init(sequelize, DataTypes);
}

class qruses extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    idqruses: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
     // comment: "Identificador autoincremental"
    },
    qr: {
      type: DataTypes.STRING,
      allowNull: false,
     // comment: "Codigo QR"
    },
    qrdesc: {
      type: DataTypes.STRING(1024),
      allowNull: true,
     // comment: "Contenido del QR"
    },
    tokenjwt: {
      type: DataTypes.STRING,
      allowNull: true,
     // comment: "Token JWT"
    },
    expiresin: {
      type: DataTypes.DATE,
      allowNull: false
    },
    status: {
      type: DataTypes.STRING(12),
      allowNull: false,
     // comment: "Estado del registro"
    }
  }, {
    sequelize,
    tableName: 'qruses',
    // schema: 'dbo',
    timestamps: true,
    indexes: [
      {
        name: "pk_qruses",
        unique: true,
        fields: [
          { name: "idqruses" },
        ]
      },
    ]
  });
  return qruses;
  }
}
