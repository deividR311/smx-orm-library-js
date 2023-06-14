const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return atendedor_eess.init(sequelize, DataTypes);
}

class atendedor_eess extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    rut: {
      type: DataTypes.STRING(14),
      allowNull: false,
      primaryKey: true,
     // comment: "Rol Unico Tributario",
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
    idempleado: {
      type: DataTypes.STRING(12),
      allowNull: true,
     // comment: "Identificador del empleado de "
    },
    status: {
      type: DataTypes.STRING(2),
      allowNull: false,
     // comment: "Estado del registro"
    }
  }, {
    sequelize,
    tableName: 'atendedor_eess',
    // schema: 'dbo',
    timestamps: true,
    indexes: [
      {
        name: "atiende_en_fk",
        fields: [
          { name: "ideess" },
        ]
      },
      {
        name: "pk_atendedor_eess",
        unique: true,
        fields: [
          { name: "rut" },
        ]
      },
    ]
  });
  return atendedor_eess;
  }
}
