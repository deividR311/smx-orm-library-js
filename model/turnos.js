const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return turnos.init(sequelize, DataTypes);
}

class turnos extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    idturno: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
     // comment: "Identificador (autogenerado) d"
    },
    idturnointernal: {
      type: DataTypes.STRING(64),
      allowNull: true,
     // comment: "Identificador de turno utiliza"
    },
    rut: {
      type: DataTypes.STRING(14),
      allowNull: false,
     // comment: "Rol Unico Tributario",
      references: {
        model: 'atendedor_eess',
        key: 'rut'
      }
    },
    fechahoraapertura: {
      type: DataTypes.DATE,
      allowNull: false,
     // comment: "Fecha\/Hora de inicio del turno"
    },
    fechahoracierre: {
      type: DataTypes.DATE,
      allowNull: true,
     // comment: "Fecha\/Hora termino del turno."
    },
    status: {
      type: DataTypes.STRING(2),
      allowNull: false,
     // comment: "Estado del registro"
    },
    cajainicial: {
      type: DataTypes.DECIMAL,
      allowNull: false,
     // comment: "Cantidad, en pesos, con la que"
    }
  }, {
    sequelize,
    tableName: 'turnos',
    // schema: 'dbo',
    timestamps: true,
    indexes: [
      {
        name: "pk_turnos",
        unique: true,
        fields: [
          { name: "idturno" },
        ]
      },
      {
        name: "turno_atendedor_fk",
        fields: [
          { name: "rut" },
        ]
      },
    ]
  });
  return turnos;
  }
}
