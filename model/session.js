const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return session.init(sequelize, DataTypes);
}

class session extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    idsession: {
      type: DataTypes.STRING(40),
      allowNull: false,
      primaryKey: true
    },
    rut: {
      type: DataTypes.STRING(14),
      allowNull: false
    },
    username: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    token: {
      type: DataTypes.STRING(120),
      allowNull: true
    },
    status: {
      type: DataTypes.STRING(12),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'session',
    // schema: 'dbo',
    timestamps: true,
    indexes: [
      {
        name: "pk_session",
        unique: true,
        fields: [
          { name: "idsession" },
        ]
      },
    ]
  });
  return session;
  }
}
