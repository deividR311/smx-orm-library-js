const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return trx_pending_task.init(sequelize, DataTypes);
}

class trx_pending_task extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    idpaymenttrx: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
     // comment: "Identificador de transaccion"
    },
    unitprocess: {
      type: DataTypes.STRING(2048),
      allowNull: false,
     // comment: "Unidad de proceso"
    },
    globalstate: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: "PENDING",
     // comment: "Estado global de la unidad de proceso"
    },
    activitystate: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: "IDLE",
     // comment: "Actividad del registro"
    },
    attempts: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0,
     // comment: "Numero de veces que se ha intentado"
    }
  }, {
    sequelize,
    tableName: 'trx_pending_task',
    // schema: 'dbo',
    timestamps: true,
    indexes: [
      {
        name: "pk_trx_pending_task",
        unique: true,
        fields: [
          { name: "idpaymenttrx" },
        ]
      },
    ]
  });
  return trx_pending_task;
  }
}
