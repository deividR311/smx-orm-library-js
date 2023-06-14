const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return eess_module.init(sequelize, DataTypes);
}

class eess_module extends Sequelize.Model {
  static init(sequelize, DataTypes) {
    super.init({
        eessModuleId: {
            autoIncrement: true,
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true
        },
        timestamp: {
            type: DataTypes.DATE,
            allowNull: true
        },
        paymentMethodId: {
            type: DataTypes.BIGINT,
            allowNull: true,
            references: {
                model: 'paymentMethod',
                key: 'paymentMethodId'
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
        ideess: {
            type: DataTypes.STRING(14),
            allowNull: false,
            references: {
                model: 'ee_ss',
                key: 'ideess'
            }
        },
        updateTimestamp: {
            type: DataTypes.DATE,
            allowNull: true
        },
        userGuid: {
            type: DataTypes.STRING(36),
            allowNull: true,
            references: {
                model: 'abm_usuario',
                key: 'guid'
            }
        },
        active: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        }
    }, {
        sequelize,
        tableName: 'eess_module',
        timestamps: false
    });
    return eess_module;
  }
}
