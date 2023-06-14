const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return tbk_ocm_payment_trx.init(sequelize, DataTypes);
}

class tbk_ocm_payment_trx extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    idpaymenttrx: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
     // comment: "Identificador autoincremental"
    },
    request: {
      type: DataTypes.STRING,
      allowNull: false,
     // comment: "Objeto JSON enviado como reque"
    },
    response: {
      type: DataTypes.STRING,
      allowNull: true,
     // comment: "Objeto JSON recibido como resp"
    },
    frontendid: {
      type: DataTypes.STRING(84),
      allowNull: false,
     // comment: "Identificador unico de transac"
    },
    internalid: {
      type: DataTypes.STRING(42),
      allowNull: false,
     // comment: "Identificador interno relacion"
    },
    mediopago: {
      type: DataTypes.STRING(12),
      allowNull: true,
     // comment: "Medio de pago utilizado."
    },
    buyordermall: {
      type: DataTypes.BIGINT,
      allowNull: false,
     // comment: "Numero de orden emitida por el"
    },
    buyorderstore: {
      type: DataTypes.BIGINT,
      allowNull: false,
     // comment: "Numero de orden emitido por la"
    },
    nombreproducto: {
      type: DataTypes.STRING(20),
      allowNull: true,
     // comment: "Nombre del producto. Se desple"
    },
    cantidadproducto: {
      type: DataTypes.DOUBLE,
      allowNull: true,
     // comment: "Cantidad de producto surtido p"
    },
    umproducto: {
      type: DataTypes.STRING(20),
      allowNull: true,
     // comment: "Unidad de medida informada por"
    },
    precioitem: {
      type: DataTypes.DOUBLE,
      allowNull: true,
     // comment: "Precio del item (producto)"
    },
    preciofusion: {
      type: DataTypes.DOUBLE,
      allowNull: true,
     // comment: "Precio del item (producto) inf"
    },
    montoneto: {
      type: DataTypes.DOUBLE,
      allowNull: true,
     // comment: "Monto neto de la venta."
    },
    tasaiva: {
      type: DataTypes.DOUBLE,
      allowNull: true,
     // comment: "Tasa del iva."
    },
    iva: {
      type: DataTypes.DOUBLE,
      allowNull: true,
     // comment: "IVA"
    },
    montototal: {
      type: DataTypes.DOUBLE,
      allowNull: true,
     // comment: "Monto total de la venta."
    },
    donacion: {
      type: DataTypes.DOUBLE,
      allowNull: true,
     // comment: "Donacion (propina) a agregar a"
    },
    vuelto: {
      type: DataTypes.DOUBLE,
      allowNull: true,
     // comment: "Vuelto a dar, informado por fu"
    },
    folioasignado: {
      type: DataTypes.STRING(24),
      allowNull: true,
     // comment: "Folio asignado para boleta ele"
    },
    rutapdf: {
      type: DataTypes.STRING(1024),
      allowNull: true,
     // comment: "Enlace para descargar version "
    },
    rutaxml: {
      type: DataTypes.STRING(1024),
      allowNull: true,
     // comment: "Enlace para descargar la versi"
    },
    rutabarcode: {
      type: DataTypes.STRING(1024),
      allowNull: true,
     // comment: "Enlace para descargar el codig"
    },
    sovosrequest: {
      type: DataTypes.STRING,
      allowNull: true,
     // comment: "Request enviado a sovos, para "
    },
    status: {
      type: DataTypes.STRING(12),
      allowNull: false,
      defaultValue: "INICIADA",
     // comment: "Estado de la transaccion: INIC"
    },
    statusresponse: {
      type: DataTypes.SMALLINT,
      allowNull: true,
     // comment: "Estado retornado por TBK con e"
    },
    statusresponsemessage: {
      type: DataTypes.STRING,
      allowNull: true,
     // comment: "Mensaje asociado al estado ret"
    },
    capture_request: {
      type: DataTypes.STRING,
      allowNull: true,
     // comment: "Request enviado para capturar"
    },
    capture_response: {
      type: DataTypes.STRING,
      allowNull: true,
     // comment: "Respuesta de la captura"
    },
    capture_status: {
      type: DataTypes.STRING(10),
      allowNull: true,
     // comment: "STATUS del request de la captura"
    },
    diffcaja: {
      type: DataTypes.SMALLINT,
      allowNull: true,
     // comment: "diffcaja al aplicar redondeo"
    },
    pagar_input: {
      type: DataTypes.STRING,
      allowNull: true,
     // comment: "Objeto JSON enviado como reque"
    },
    rut: {
      type: DataTypes.STRING(14),
      allowNull: true,
     // comment: "Objeto JSON enviado como reque"
    },
    email_boleta: {
      type: DataTypes.STRING(321),
      allowNull: true,
     // comment: "email adicional al registrado"
    },
    ideess: {
      type: DataTypes.STRING(14),
      allowNull: true,
     // comment: "estacion de servicio"
    },
    fp: {
      type: DataTypes.STRING(10),
      allowNull: true,
     // comment: "fp reservado"
    },
    productno: {
      type: DataTypes.STRING(10),
      allowNull: true,
     // comment: "productno comprado"
    },
    releasetoken: {
      type: DataTypes.STRING(10),
      allowNull: true,
     // comment: "releasetoken a usar"
    },
    refund_request: {
      type: DataTypes.STRING,
      allowNull: true,
     // comment: "request refund"
    },
    refund_response: {
      type: DataTypes.STRING,
      allowNull: true,
     // comment: "response refund"
    },
    refund_status: {
      type: DataTypes.STRING(20),
      allowNull: true,
     // comment: "estado de refund"
    },
    refund_status_message: {
      type: DataTypes.STRING(120),
      allowNull: true,
     // comment: "descripcion de estado refund"
    },
    dte_status: {
      type: DataTypes.STRING(40),
      allowNull: true,
     // comment: "estado de documento DTE"
    },
    montofusion: {
      type: DataTypes.DOUBLE,
      allowNull: true,
     // comment: "Monto informado por Fusion"
    },
    codigovuelto: {
      type: DataTypes.STRING(32),
      allowNull: true,
     // comment: "Codigo de vuelto"
    },
    authorisefuelpoint: {
      type: DataTypes.STRING(2048),
      allowNull: true,
     // comment: "Comando AuthoriseFuelPoint"
    },
    clearfuelsaletrx: {
      type: DataTypes.STRING(2048),
      allowNull: true,
     // comment: "Comando ClearFuelSaleTrx"
    },
    fuelsaletrx: {
      type: DataTypes.STRING(2560),
      allowNull: true,
     // comment: "Comando FuelSaleTrx"
    }
  }, {
    sequelize,
    tableName: 'tbk_ocm_payment_trx',
    // schema: 'dbo',
    timestamps: true,
    indexes: [
      {
        name: "pk_tbk_ocm_payment_trx",
        unique: true,
        fields: [
          { name: "idpaymenttrx" },
        ]
      },
    ]
  });
  return tbk_ocm_payment_trx;
  }
}
