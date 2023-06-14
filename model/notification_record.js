const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return notification_record.init(sequelize, DataTypes);
}

class notification_record extends Sequelize.Model {
  static init(sequelize, DataTypes) {
    super.init({
        notificationRecordId: {
            autoIncrement: true,
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true
        },
        timestamp: {
            type: DataTypes.DATE,
            allowNull: false
        },
        notificationId: {
            type: DataTypes.BIGINT,
            allowNull: false,
            references: {
                model: 'notification',
                key: 'notificationId'
            }
        },
        iddsps: {
            type: DataTypes.BIGINT,
            allowNull: true,
            references: {
                model: 'dsps',
                key: 'iddsps'
            }
        },
        rut: {
            type: DataTypes.BIGINT,
            allowNull: true,
            references: {
                model: 'atendedores',
                key: 'rut'
            }
        },
        idpaymenttrx: {
            type: DataTypes.BIGINT,
            allowNull: true,
            references: {
                model: 'trx_pending_task',
                key: 'idpaymenttrx'
            }
        },
        state: {
            type: DataTypes.STRING(20),
            allowNull: true
        },
        updateTimestamp: {
            type: DataTypes.DATE,
            allowNull: true
        },
        userRut: {
            type: DataTypes.BIGINT,
            allowNull: true,
            references: {
                model: 'usuarios',
                key: 'rut'
            }
        },
        payment_description: {
            type: DataTypes.STRING(20),
            allowNull: true
        },
        cashPaymentId: {
            type: DataTypes.BIGINT,
            allowNull: true,
            references: {
                model: 'cash_payment',
                key: 'cashPaymentId'
            }
        },
        peopleRut: {
            type: DataTypes.BIGINT,
            allowNull: true,
            references: {
                model: 'personas',
                key: 'rut'
            }
        },
    }, {
        sequelize,
        tableName: 'notification_record',
        timestamps: false,
        indexes: [
            {
                name: "notificationRecord_notification_fk",
                fields: [{ name: "notificationId" }]
            },
            {
                name: "notificationRecord_ddsps_fk",
                fields: [{ name: "iddsps" }]
            },
            {
                name: "notificationRecord_atendedor_fk",
                fields: [{ name: "rut" }]
            },
            {
                name: "notificationRecord_trxPendingTask_fk",
                fields: [{ name: "idpaymenttrx" }]
            },
            {
                name: "pk_notification_record",
                unique: true,
                fields: [{ name: "notificationRecordId" }]
            },
            {
                name: "notificationRecord_usuario_fk",
                fields: [{ name: "userRut" }]
            },
            {
                name: "notificationRecord_cashPayment_fk",
                fields: [{ name: "cashPaymentId" }]
            },
            {
                name: "notificationRecord_persona_fk",
                fields: [{ name: "peopleRut" }]
            }
        ]
    });
    return notification_record;
  }
}
