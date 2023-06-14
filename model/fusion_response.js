const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return fusion_response.init(sequelize, DataTypes);
}

class fusion_response extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    idfusionresponse: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
     // comment: "GUID asignado a la respuesta"
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
    resrequesttype: {
      type: DataTypes.STRING(32),
      allowNull: false,
     // comment: "Tipo de request al que corresp"
    },
    resworkstationid: {
      type: DataTypes.STRING(8),
      allowNull: false,
     // comment: "Identificador del equipo que r"
    },
    resapplicationsender: {
      type: DataTypes.STRING(8),
      allowNull: false,
     // comment: "Identificador de la aplicacion"
    },
    resrequestid: {
      type: DataTypes.STRING(8),
      allowNull: false,
     // comment: "Identificador del request orig"
    },
    resoverallresult: {
      type: DataTypes.STRING(36),
      allowNull: false,
     // comment: "Estado general de la respuesta"
    },
    rescorrelationexpression: {
      type: DataTypes.STRING(512),
      allowNull: true,
     // comment: "Expresion que realiza la corre"
    },
    resxmlmessage: {
      type: DataTypes.STRING,
      allowNull: true,
     // comment: "Mensaje xml enviado por Fusion"
    },
    resjsonmessage: {
      type: DataTypes.STRING,
      allowNull: true,
     // comment: "String json obtenido a partir "
    },
    resstatus: {
      type: DataTypes.STRING(12),
      allowNull: false,
     // comment: "Estado del response\/registro. "
    },
    resstatusdescription: {
      type: DataTypes.STRING(512),
      allowNull: false,
     // comment: "Descripcion extensea del estad"
    }
  }, {
    sequelize,
    tableName: 'fusion_response',
    // schema: 'dbo',
    timestamps: true,
    indexes: [
      {
        name: "pk_fusion_response",
        unique: true,
        fields: [
          { name: "idfusionresponse" },
        ]
      },
      {
        name: "res_correlation_expression",
        fields: [
          { name: "rescorrelationexpression" },
        ]
      },
      {
        name: "response_de_fusion_fk",
        fields: [
          { name: "ideess" },
        ]
      },
    ]
  });
  return fusion_response;
  }
}
