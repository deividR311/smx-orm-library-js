const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return fusion_enabled_devices.init(sequelize, DataTypes);
}

class fusion_enabled_devices extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    idfilterfusiondevices: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    ideess: {
      type: DataTypes.STRING(14),
      allowNull: false,
     // comment: "Identificador de la estacion d",
      references: {
        model: 'ee_ss',
        key: 'ideess'
      }
    },
    devicetype: {
      type: DataTypes.STRING(10),
      allowNull: false,
     // comment: "Tipo de dispositivo a filtrar."
    },
    deviceid: {
      type: DataTypes.STRING(12),
      allowNull: false,
     // comment: "Identificador unico del dispos"
    },
    modeno: {
      type: DataTypes.SMALLINT,
      allowNull: false,
     // comment: "Modo de servicio. Utilizado pa"
    },
    pumpno: {
      type: DataTypes.SMALLINT,
      allowNull: true,
     // comment: "Pump Number. El FP contiene un"
    },
    productno: {
      type: DataTypes.SMALLINT,
      allowNull: true,
     // comment: "Numero de item correspondiente"
    },
    terminalno: {
      type: DataTypes.SMALLINT,
      allowNull: true,
     // comment: "Dato adicional informado por F"
    },
    devicereadertype: {
      type: DataTypes.SMALLINT,
      allowNull: true,
     // comment: "Informado por Fusion. Se almac"
    },
    logicalid: {
      type: DataTypes.SMALLINT,
      allowNull: true,
     // comment: "Identificador logico (no fisic"
    },
    qrcode: {
      type: DataTypes.STRING(2048),
      allowNull: true,
     // comment: "Codigo QR asociado al disposit"
    },
    status: {
      type: DataTypes.STRING(12),
      allowNull: true,
     // comment: "Estado del registro."
    }
  }, {
    sequelize,
    tableName: 'fusion_enabled_devices',
    // schema: 'dbo',
    timestamps: true,
    indexes: [
      {
        name: "eess_filter_devices_fk",
        fields: [
          { name: "ideess" },
        ]
      },
      {
        name: "pk_fusion_enabled_devices",
        unique: true,
        fields: [
          { name: "idfilterfusiondevices" },
        ]
      },
    ]
  });
  return fusion_enabled_devices;
  }
}
