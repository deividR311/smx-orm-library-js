const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return supervisor_eess.init(sequelize, DataTypes);
}

class supervisor_eess extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    rut: {
      type: DataTypes.STRING(14),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'personas',
        key: 'rut'
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
    passwordsupervisor: {
      type: DataTypes.STRING(64),
      allowNull: true,
     // comment: "Password del supervisor. Puede"
    },
    status: {
      type: DataTypes.STRING(2),
      allowNull: false,
     // comment: "Estado del registro."
    }
  }, {
    sequelize,
    tableName: 'supervisor_eess',
    // schema: 'dbo',
    timestamps: true,
    indexes: [
      {
        name: "pk_supervisor_eess",
        unique: true,
        fields: [
          { name: "rut" },
        ]
      },
      {
        name: "supervisa_a_fk",
        fields: [
          { name: "ideess" },
        ]
      },
    ]
  });
  return supervisor_eess;
  }
}
