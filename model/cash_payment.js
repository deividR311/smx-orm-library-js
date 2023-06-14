const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return cash_payment.init(sequelize, DataTypes);
}

class cash_payment extends Sequelize.Model {
  static init(sequelize, DataTypes) {
    super.init({
        cashPaymentId: {
            autoIncrement: true,
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true
        },
        amount: {
            type: DataTypes.DOUBLE,
            allowNull: false
        },
        timestamp: {
            type: DataTypes.DATE,
            allowNull: false
        },
        state: {
            type: DataTypes.STRING(20),
            allowNull: true
        },
        updateTimestamp: {
            type: DataTypes.DATE,
            allowNull: true
        },
        productName: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        pricePerLiter: {
            type: DataTypes.DOUBLE,
            allowNull: true
        },
        liter: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        discount: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        total: {
            type: DataTypes.DOUBLE,
            allowNull: true
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
        userRut: {
            type: DataTypes.BIGINT,
            allowNull: true,
            references: {
                model: 'usuarios',
                key: 'rut'
            }
        },
        literPriceWithDiscount: {
            type: DataTypes.DOUBLE,
            allowNull: true
        },
        discountName: {
            type: DataTypes.STRING,
            allowNull: true
        },
    }, {
        sequelize,
        tableName: 'cash_payment',
        timestamps: false,
        indexes: [
            {
                name: "cash_payment_ddsps_fk",
                fields: [{ name: "iddsps" }]
            },
            {
                name: "cash_payment_atendedor_fk",
                fields: [{ name: "rut" }]
            },
            {
                name: "cash_payment_trxPendingTask_fk",
                fields: [{ name: "idpaymenttrx" }]
            },
            {
                name: "cash_payment_usuario_fk",
                fields: [{ name: "userRut" }]
            },
            {
                name: "pk_cash_payment",
                unique: true,
                fields: [{ name: "cashPaymentId" }]
            },
        ]
    });
    return cash_payment;
  }
}
