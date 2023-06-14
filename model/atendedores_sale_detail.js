const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return atendedores_sale_detail.init(sequelize, DataTypes);
}

class atendedores_sale_detail extends Sequelize.Model{
    static init(sequelize, DataTypes){
        super.init(
            {
                id: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    primaryKey: true,
                    autoIncrement: true
                },
                idcashpayment: {
                    type: DataTypes.BIGINT,
                    allowNull: true,
                    references: {
                        model: 'cash_payment',
                        key: 'cashPaymentId'
                    }
                },
                rut: {
                    type: DataTypes.STRING(14),
                    allowNull: false,
                    references: {
                        model: 'atendedores',
                        key: 'rut'
                    }
                },
                metodopago: {
                    type: DataTypes.STRING(50),
                    allowNull: false,
                },
                tipogasolina: {
                    type: DataTypes.STRING(50),
                    allowNull: false,
                },
                preciolitro: {
                    type: DataTypes.DOUBLE,
                    allowNull: false,
                },
                cantidad: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                },
                montocarga: {
                    type: DataTypes.DOUBLE,
                    allowNull: false,
                },
                descuento: {
                    type: DataTypes.DOUBLE,
                    allowNull: false,
                },
                totalpago: {
                    type: DataTypes.DOUBLE,
                    allowNull: false,
                }
            },
            {
                sequelize,
                tableName: 'atendedores_sale_details',
                timestamps: true
            }
        );
        return atendedores_sale_detail;
    }
}