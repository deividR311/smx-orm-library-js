const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return movimientos_turno.init(sequelize, DataTypes);
}

class movimientos_turno extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    idmovimiento: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
     // comment: "Identificador (autogenerado) d"
    },
    idturno: {
      type: DataTypes.BIGINT,
      allowNull: false,
     // comment: "Idetnificador del turno.",
      references: {
        model: 'turnos',
        key: 'idturno'
      }
    },
    tipomovimiento: {
      type: DataTypes.STRING(2),
      allowNull: false,
     // comment: "Tipo de movimiento. (E)ntrega,"
    },
    fechahoramovimiento: {
      type: DataTypes.DATE,
      allowNull: false,
     // comment: "Timestamp del movimiento."
    },
    montomovimiento: {
      type: DataTypes.DECIMAL,
      allowNull: false,
     // comment: "Monto involucrado en el movimi"
    },
    paymenttransaction: {
      type: DataTypes.BIGINT,
      allowNull: true,
     // comment: "Identificador de la transaccio"
    },
    status: {
      type: DataTypes.STRING(2),
      allowNull: false,
     // comment: "Estado del registro."
    }
  }, {
    sequelize,
    tableName: 'movimientos_turno',
    // schema: 'dbo',
    timestamps: true,
    indexes: [
      {
        name: "movimiento_turno_fk",
        fields: [
          { name: "idturno" },
        ]
      },
      {
        name: "pk_movimientos_turno",
        unique: true,
        fields: [
          { name: "idmovimiento" },
        ]
      },
    ]
  });
  return movimientos_turno;
  }
}
