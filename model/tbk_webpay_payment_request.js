const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return tbk_webpay_payment_request.init(sequelize, DataTypes);
}

class tbk_webpay_payment_request extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    webpaytoken: {
      type: DataTypes.STRING(64),
      allowNull: false,
      primaryKey: true,
     // comment: "Token TBK al momento de iniciar un pago"
    },
    webpaypagarinput: {
      type: DataTypes.STRING,
      allowNull: false,
     // comment: "Entrada al metodo de pago webpay"
    },
    webpayfrontendid: {
      type: DataTypes.STRING(64),
      allowNull: false,
     // comment: "id generado por frontend"
    },
    webpayfrontendcardtype: {
      type: DataTypes.STRING(12),
      allowNull: false,
     // comment: "tipo de tarjeta informado al iniciar pago"
    },
    webpaymallbuyorder: {
      type: DataTypes.STRING(26),
      allowNull: false,
     // comment: "BuyOrder del MALL"
    },
    webpayurlrequest: {
      type: DataTypes.STRING(256),
      allowNull: false,
     // comment: "url invocada para realizar el pago"
    },
    webpayurlcallback: {
      type: DataTypes.STRING(256),
      allowNull: false,
     // comment: "url de callback empleada por TBK"
    },
    webpaysessionid: {
      type: DataTypes.STRING(64),
      allowNull: false,
     // comment: "SessionID generado por el sistema"
    },
    webpaydetailscommercecode: {
      type: DataTypes.STRING(12),
      allowNull: false,
     // comment: "Codigo comercio de la tienda"
    },
    webpaydetailsbuyorder: {
      type: DataTypes.STRING(26),
      allowNull: false,
     // comment: "BuyOrder de la tienda"
    },
    webpaydetailsamount: {
      type: DataTypes.DOUBLE,
      allowNull: false,
     // comment: "Monto del pago"
    },
    webpayrequesttimeout: {
      type: DataTypes.DATE,
      allowNull: false,
     // comment: "Fecha/Hora cuando el registro quedara invalido"
    },
    webpaystatusrequest: {
      type: DataTypes.STRING(12),
      allowNull: false,
     // comment: "Estado del requerimiento"
    },
    webpaystatusresponse: {
      type: DataTypes.STRING(12),
      allowNull: true,
     // comment: "Estado retornado por TBK"
    },
    webpaystatusresponsemessage: {
      type: DataTypes.STRING(256),
      allowNull: true,
     // comment: "Descripcion estado retornado por TBK"
    },
    webpayinitpaymentrequest: {
      type: DataTypes.STRING,
      allowNull: true,
     // comment: "json enviado en request de inicio de pago"
    },
    webpayinitpaymentresponse: {
      type: DataTypes.STRING,
      allowNull: true,
     // comment: "json recibido de respuesta en el callback"
    },
    webpayfinishpaymentrequest: {
      type: DataTypes.STRING,
      allowNull: true,
     // comment: "json enviado en request de confirmacion"
    },
    webpayfinishpaymentresponse: {
      type: DataTypes.STRING,
      allowNull: true,
     // comment: "json recibido de respuesta a confirmacion"
    },
    webpaypaymentcardtype: {
      type: DataTypes.STRING(12),
      allowNull: true,
     // comment: "tipo de pago finalmente utilizado por el cliente"
    },
    webpaynrocuotas: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
     // comment: "nro de cuotas si corresponde. 0 por defecto"
    },
    webpayrefundrequest: {
      type: DataTypes.STRING,
      allowNull: true,
     // comment: "refund request cuando se realiza en fase de pago"
    },
    webpayrefundresponse: {
      type: DataTypes.STRING,
      allowNull: true,
     // comment: "refund response cuando se realiza en fase de pago"
    },
    webpayrefundstatus: {
      type: DataTypes.STRING(20),
      allowNull: true,
     // comment: "refund status cuando se realiza en fase de pago"
    },
    webpayrefundstatusmessage: {
      type: DataTypes.STRING(120),
      allowNull: true,
     // comment: "refund status message cuando se realiza en fase de pago"
    },
    webpaytrxid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: -1,
     // comment: "identificador de transaccion una vez que la solicitud de pago termina OK, default -1"
    }
  }, {
    sequelize,
    tableName: 'tbk_webpay_payment_request',
    // schema: 'dbo',
    timestamps: true,
    indexes: [
      {
        name: "pk_tbk_webpay_payment_request",
        unique: true,
        fields: [
          { name: "webpaytoken" },
        ]
      },
    ]
  });
  return tbk_webpay_payment_request;
  }
}
