const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return paymentMethod.init(sequelize, DataTypes);
}

class paymentMethod extends Sequelize.Model {
  static init(sequelize, DataTypes) {
    super.init({
        paymentMethodId: {
            autoIncrement: true,
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    }, {
        sequelize,
        tableName: 'paymentMethod',
        timestamps: false,
        indexes: [
          {
              name: "pk_paymentMethod",
              unique: true,
              fields: [{ name: "paymentMethodId" }]
          }
      ]
    });
    return paymentMethod;
  }
}
