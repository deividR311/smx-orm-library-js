const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return fusion_fdc_events.init(sequelize, DataTypes);
}

class fusion_fdc_events extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    ideventofusion: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
     // comment: "GUID para identificar el event"
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
    evtmessagetype: {
      type: DataTypes.STRING(48),
      allowNull: false,
     // comment: "Tipo de mensaje que transmite "
    },
    evtapplicationsender: {
      type: DataTypes.STRING(8),
      allowNull: false,
     // comment: "Identificador de la aplicacion"
    },
    evtworkstationid: {
      type: DataTypes.STRING(8),
      allowNull: false,
     // comment: "Identificador del equipo que r"
    },
    evtmessageid: {
      type: DataTypes.STRING(8),
      allowNull: false,
     // comment: "Identificador del evento."
    },
    evtcorrelationexpression: {
      type: DataTypes.STRING(512),
      allowNull: true,
     // comment: "Expresion que realiza la corre"
    },
    evtxmlmessage: {
      type: DataTypes.STRING,
      allowNull: true,
     // comment: "String xml con el mensaje que "
    },
    evtjsonmessage: {
      type: DataTypes.STRING,
      allowNull: true,
     // comment: "String json con el mensaje que"
    },
    evtstatus: {
      type: DataTypes.STRING(12),
      allowNull: true,
     // comment: "Estado del evento\/registro. RE"
    },
    evtstatusdescription: {
      type: DataTypes.STRING(256),
      allowNull: true,
     // comment: "Descripcion extensa del estado"
    }
  }, {
    sequelize,
    tableName: 'fusion_fdc_events',
    // schema: 'dbo',
    timestamps: true,
    indexes: [
      {
        name: "eventos_de_fusion_fk",
        fields: [
          { name: "ideess" },
        ]
      },
      {
        name: "evt_correlation_expression",
        fields: [
          { name: "evtcorrelationexpression" },
        ]
      },
      {
        name: "pk_fusion_fdc_events",
        unique: true,
        fields: [
          { name: "ideventofusion" },
        ]
      },
    ]
  });
  return fusion_fdc_events;
  }
}
