const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return ee_ss.init(sequelize, DataTypes);
}

class ee_ss extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    ideess: {
      type: DataTypes.STRING(14),
      allowNull: false,
      primaryKey: true,
     // comment: "Identificador de la estacion d"
    },
    tipo: {
      type: DataTypes.STRING(12),
      allowNull: false,
     // comment: "Tipo de tienda. Propia o conse"
    },
    ruteess: {
      type: DataTypes.STRING(16),
      allowNull: false,
     // comment: "Rut de la empresa."
    },
    giro: {
      type: DataTypes.STRING(1024),
      allowNull: false,
     // comment: "Giro de la estacion de servici"
    },
    codigogilbarco: {
      type: DataTypes.STRING(10),
      allowNull: false,
     // comment: "Codigo Gilbarco (GLB)"
    },
    codigosii: {
      type: DataTypes.STRING(14),
      allowNull: false,
     // comment: "Codigo asignado por el SII"
    },
    nombrefantasia: {
      type: DataTypes.STRING(256),
      allowNull: true,
     // comment: "Nombre de la estacion de servi"
    },
    razonsocial: {
      type: DataTypes.STRING(512),
      allowNull: false,
     // comment: "Razon social."
    },
    comuna: {
      type: DataTypes.STRING(64),
      allowNull: false,
     // comment: "Comuna en la que se encuentra "
    },
    ciudad: {
      type: DataTypes.STRING(64),
      allowNull: false,
     // comment: "Ciudad en donde se encuentra l"
    },
    direccion: {
      type: DataTypes.STRING(512),
      allowNull: false,
     // comment: "Dirección completa de la estac"
    },
    ubicacion: {
      type: DataTypes.STRING(256),
      allowNull: true,
     // comment: "(uso futuro) - Latitud\/Longitu"
    },
    status: {
      type: DataTypes.STRING(12),
      allowNull: false,
     // comment: "Estado del registro"
    }
  }, {
    sequelize,
    tableName: 'ee_ss',
    // schema: 'dbo',
    timestamps: true,
    indexes: [
      {
        name: "pk_ee_ss",
        unique: true,
        fields: [
          { name: "ideess" },
        ]
      },
    ]
  });
  return ee_ss;
  }
}
