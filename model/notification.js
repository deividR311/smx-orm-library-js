const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return notification.init(sequelize, DataTypes);
}

class notification extends Sequelize.Model {
  static init(sequelize, DataTypes) {
    super.init({
        notificationId: {
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
        },
        active: {
          type: DataTypes.BOOLEAN,
          allowNull: true
        },
        priority: {
          type: DataTypes.INTEGER,
          allowNull: true
        },
    }, {
        sequelize,
        tableName: 'notification',
        timestamps: false,
        indexes: [
          {
              name: "pk_notification",
              unique: true,
              fields: [{ name: "notificationId" }]
          }
      ]
    });
    return notification;
  }
}
