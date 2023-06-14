const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return personas.init(sequelize, DataTypes);
}

class personas extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    rut: {
      type: DataTypes.STRING(14),
      allowNull: false,
      primaryKey: true,
     // comment: "Rol Unico Tributario"
    },
    nombres: {
      type: DataTypes.STRING(120),
      allowNull: false,
     // comment: "Nombre de la persona"
    },
    apellidos: {
      type: DataTypes.STRING(120),
      allowNull: true,
     // comment: "Apellidos de la persona"
    },
    fechanacimiento: {
      type: DataTypes.DATE,
      allowNull: true,
     // comment: "Fecha de nacimiento. Es inform"
    },
    genero: {
      type: DataTypes.STRING(24),
      allowNull: true,
     // comment: "Genero informado al momento de"
    },
    status: {
      type: DataTypes.STRING(2),
      allowNull: false,
     // comment: "Estado del registro"
    }
  }, {
    sequelize,
    tableName: 'personas',
    // schema: 'dbo',
    timestamps: true,
    indexes: [
      {
        name: "pk_personas",
        unique: true,
        fields: [
          { name: "rut" },
        ]
      },
    ]
  });
  return personas;
  }
}
