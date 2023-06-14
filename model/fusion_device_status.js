const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return fusion_device_status.init(sequelize, DataTypes);
}

class fusion_device_status extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_fsndevicestatus: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
     // comment: "Identificador autoincremental"
    },
    ideess: {
      type: DataTypes.STRING(14),
      allowNull: false,
     // comment: "Id estacion de servicio",
    },
    fpdeviceid: {
      type: DataTypes.SMALLINT,
      allowNull: false,
     // comment: "Id del dispositivo",
    },
    nozzleno: {
      type: DataTypes.SMALLINT,
      allowNull: true,
     // comment: "Id del nozzle",
    },
    fpdevicestate: {
      type: DataTypes.STRING(32),
      allowNull: true,
     // comment: "Estado del dispositivo"
    },
    fpdevicesubstate: {
      type: DataTypes.STRING(32),
      allowNull: true,
     // comment: "Sub-estado del dispositivo"
    },
    fperrorcode: {
      type: DataTypes.STRING(32),
      allowNull: true,
     // comment: "Estado del FP"
    },
    nozzlelogicalstate: {
      type: DataTypes.STRING(32),
      allowNull: true,
     // comment: "Estado logico del nozzle"
    },
    nozzletanklogicalstate: {
      type: DataTypes.STRING(32),
      allowNull: true,
     // comment: "Estado logico del tanque"
    },
    logicalnozzle: {
      type: DataTypes.STRING(32),
      allowNull: true,
     // comment: "Identificador logico del nozzle"
    },
    nozzleerrorcode: {
      type: DataTypes.STRING(32),
      allowNull: true,
     // comment: "Estado del nozzle"
    },
    recordmetadata: {
      type: DataTypes.STRING,
      allowNull: true,
     // comment: "Metadata del dispositivo"
    }
  }, {
    sequelize,
    tableName: 'fusion_device_status',
    // schema: 'dbo',
    timestamps: true,
    indexes: [
      /*{
        name: "pk_fsndevicestatus",
        unique: true,
        fields: [
          { name: "id_fsndevicestatus" },
        ]
      },*/
        {
            unique: true,
            fields: ['ideess', 'fpdeviceid', 'nozzleno']
        }
    ]
  });
  return fusion_device_status;
  }
}
