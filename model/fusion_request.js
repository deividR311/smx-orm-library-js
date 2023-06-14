const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return fusion_request.init(sequelize, DataTypes);
}

class fusion_request extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    idfusionrequest: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
     // comment: "GUID asignado al request"
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
    reqrequesttype: {
      type: DataTypes.STRING(32),
      allowNull: false,
     // comment: "Tipo de request"
    },
    reqworkstationid: {
      type: DataTypes.STRING(8),
      allowNull: false,
     // comment: "Identificador del equipo que r"
    },
    reqapplicationsender: {
      type: DataTypes.STRING(8),
      allowNull: false,
     // comment: "Identificador de la aplicacion"
    },
    reqrequestid: {
      type: DataTypes.STRING(8),
      allowNull: false,
     // comment: "Identificador del request."
    },
    reqcorrelationexpression: {
      type: DataTypes.STRING(512),
      allowNull: true,
     // comment: "Expresion que realiza la corre"
    },
    reqxmlmessage: {
      type: DataTypes.STRING,
      allowNull: true,
     // comment: "String xml enviado a Fusion."
    },
    reqjsonmessage: {
      type: DataTypes.STRING,
      allowNull: true,
     // comment: "String json que representa el "
    },
    reqstatus: {
      type: DataTypes.STRING(12),
      allowNull: false,
     // comment: "Estado del request\/registro. E"
    },
    reqstatusdescription: {
      type: DataTypes.STRING(512),
      allowNull: false,
     // comment: "Descripcion extensa del estado"
    }
  }, {
    sequelize,
    tableName: 'fusion_request',
    // schema: 'dbo',
    timestamps: true,
    indexes: [
      {
        name: "pk_fusion_request",
        unique: true,
        fields: [
          { name: "idfusionrequest" },
        ]
      },
      {
        name: "req_correlation_expression",
        fields: [
          { name: "reqcorrelationexpression" },
        ]
      },
      {
        name: "request_a_fusion_fk",
        fields: [
          { name: "ideess" },
        ]
      },
    ]
  });
  return fusion_request;
  }
}
