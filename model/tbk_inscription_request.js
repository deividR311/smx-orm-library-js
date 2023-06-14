const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return tbk_inscription_request.init(sequelize, DataTypes);
}

class tbk_inscription_request extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    tbktoken: {
      type: DataTypes.STRING(120),
      allowNull: false,
      primaryKey: true,
     // comment: "Token entregado por TBK cuando"
    },
    urlwebpay: {
      type: DataTypes.STRING(256),
      allowNull: false,
     // comment: "URL  entregada por TBK cuando "
    },
    usernamerequest: {
      type: DataTypes.STRING(50),
      allowNull: false,
     // comment: "username (rut) utilizado para "
    },
    emailrequest: {
      type: DataTypes.STRING(321),
      allowNull: false,
     // comment: "Email empleado en la inscripci"
    },
    serviceurlrequest: {
      type: DataTypes.STRING(512),
      allowNull: false,
     // comment: "Nombre del servicio al que se "
    },
    rawinput: {
      type: DataTypes.STRING,
      allowNull: false,
     // comment: "El mensaje JSON enviado al ser"
    },
    rawoutput: {
      type: DataTypes.STRING,
      allowNull: true,
     // comment: "El mensaje JSON de respuesta."
    },
    statusrequest: {
      type: DataTypes.STRING(12),
      allowNull: false,
     // comment: "Estado del requerimiento. 'ENE"
    },
    statusresponse: {
      type: DataTypes.INTEGER,
      allowNull: true,
     // comment: "Estado retornado por TBK con e"
    },
    statusresponsemessage: {
      type: DataTypes.STRING(256),
      allowNull: true,
     // comment: "Mensaje asociado al estado ret"
    },
    inscription_type: {
      type: DataTypes.STRING(20),
      allowNull: true,
     // comment: "tipo de inscripcion credito/debito"
    }
  }, {
    sequelize,
    tableName: 'tbk_inscription_request',
    // schema: 'dbo',
    timestamps: true,
    indexes: [
      {
        name: "pk_tbk_inscription_request",
        unique: true,
        fields: [
          { name: "tbktoken" },
        ]
      },
    ]
  });
  return tbk_inscription_request;
  }
}
