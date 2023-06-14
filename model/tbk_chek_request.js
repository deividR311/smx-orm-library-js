const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return tbk_chek_request.init(sequelize, DataTypes);
}

class tbk_chek_request extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    chektoken: {
      type: DataTypes.STRING(64),
      allowNull: false,
      primaryKey: true,
     // comment: "Token TBK al momento de iniciar un pago"
    },
    chekpagarinput: {
      type: DataTypes.STRING,
      allowNull: false,
     // comment: "Entrada al metodo de pago chek"
    },
    chekfrontendid: {
      type: DataTypes.STRING(64),
      allowNull: false,
     // comment: "id generado por frontend"
    },
    chekmallbuyorder: {
      type: DataTypes.STRING(26),
      allowNull: false,
     // comment: "BuyOrder del MALL"
    },
    chekurlrequest: {
      type: DataTypes.STRING(256),
      allowNull: false,
     // comment: "url invocada para realizar el pago"
    },
    chekurlcallback: {
      type: DataTypes.STRING(256),
      allowNull: false,
     // comment: "url de callback empleada por TBK"
    },
    cheksessionid: {
      type: DataTypes.STRING(64),
      allowNull: false,
     // comment: "SessionID generado por el sistema"
    },
    chekdetailscommercecode: {
      type: DataTypes.STRING(12),
      allowNull: false,
     // comment: "Codigo comercio de la tienda"
    },
    chekdetailsbuyorder: {
      type: DataTypes.STRING(26),
      allowNull: false,
     // comment: "BuyOrder de la tienda"
    },
    chekdetailsamount: {
      type: DataTypes.DOUBLE,
      allowNull: false,
     // comment: "Monto del pago"
    },
    chekrequesttimeout: {
      type: DataTypes.DATE,
      allowNull: false,
     // comment: "Fecha/Hora cuando el registro quedara invalido"
    },
    chekstatusrequest: {
      type: DataTypes.STRING(12),
      allowNull: false,
     // comment: "Estado del requerimiento"
    },
    chekstatusresponse: {
      type: DataTypes.STRING(12),
      allowNull: true,
     // comment: "Estado retornado por TBK"
    },
    chekstatusresponsemessage: {
      type: DataTypes.STRING(256),
      allowNull: true,
     // comment: "Descripcion estado retornado por TBK"
    },
    chekinitpaymentrequest: {
      type: DataTypes.STRING,
      allowNull: true,
     // comment: "json enviado en request de inicio de pago"
    },
    chekinitpaymentresponse: {
      type: DataTypes.STRING,
      allowNull: true,
     // comment: "json recibido de respuesta en el callback"
    },
    chekfinishpaymentrequest: {
      type: DataTypes.STRING,
      allowNull: true,
     // comment: "json enviado en request de confirmacion"
    },
    chekfinishpaymentresponse: {
      type: DataTypes.STRING,
      allowNull: true,
     // comment: "json recibido de respuesta a confirmacion"
    },
    chekrefundrequest: {
      type: DataTypes.STRING,
      allowNull: true,
     // comment: "refund request cuando se realiza en fase de pago"
    },
    chekrefundresponse: {
      type: DataTypes.STRING,
      allowNull: true,
     // comment: "refund response cuando se realiza en fase de pago"
    },
    chekrefundstatus: {
      type: DataTypes.STRING(20),
      allowNull: true,
     // comment: "refund status cuando se realiza en fase de pago"
    },
    chekrefundstatusmessage: {
      type: DataTypes.STRING(120),
      allowNull: true,
     // comment: "refund status message cuando se realiza en fase de pago"
    },
    chektrxid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: -1,
     // comment: "identificador de transaccion una vez que la solicitud de pago termina OK, default -1"
    }
  }, {
    sequelize,
    tableName: 'tbk_chek_request',
    // schema: 'dbo',
    timestamps: true,
    indexes: [
      {
        name: "pk_tbk_chek_request",
        unique: true,
        fields: [
          { name: "chektoken" },
        ]
      },
    ]
  });
  return tbk_chek_request;
  }
}
