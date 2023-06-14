const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return organizacion.init(sequelize, DataTypes);
}

class organizacion extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    rutorganizacion: {
      type: DataTypes.STRING(16),
      allowNull: false,
      primaryKey: true,
     // comment: "Rut de la empresa"
    },
    razonsocial: {
      type: DataTypes.STRING(512),
      allowNull: false,
     // comment: "Razon social."
    },
    nombrefantasia: {
      type: DataTypes.STRING(256),
      allowNull: true,
     // comment: "Nombre de fantasia."
    },
    direccion: {
      type: DataTypes.STRING(512),
      allowNull: true,
     // comment: "Direccion de oficinas."
    },
    comuna: {
      type: DataTypes.STRING(64),
      allowNull: true,
     // comment: "Comuna"
    },
    ciudad: {
      type: DataTypes.STRING(64),
      allowNull: true,
     // comment: "Ciudad"
    },
    giro: {
      type: DataTypes.STRING(512),
      allowNull: true,
     // comment: "Giro"
    },
    codigosii: {
      type: DataTypes.STRING(14),
      allowNull: true,
     // comment: "Codigo SII (si fuerea necesario)"
    }
  }, {
    sequelize,
    tableName: 'organizacion',
    // schema: 'dbo',
    timestamps: true,
    indexes: [
      {
        name: "pk_organizacion",
        unique: true,
        fields: [
          { name: "rutorganizacion" },
        ]
      },
    ]
  });
  return organizacion;
  }
}
