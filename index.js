// configuracion de la base de datos
var db = require('./config/init-database.js');
var initModels = require('./model/init-models.js');
const models = initModels(db.sequelize);

/*
const TbkPaymentRequest = db.sequelize.models.tbk_webpay_payment_request;
TbkPaymentRequest.describe().then(function (schema) {
  return Object.keys(schema).filter(function(field){
    console.log(`${schema}[${field}].primaryKey=${schema[field].primaryKey}`);
      return schema[field].primaryKey;
  });
});
*/

/*
// force: true , elimina las tablas antes de crearlas
// sync: refleja cambios en entidades sequelize en la base de datos
db.sequelize.sync({ force: false }).then(() => {
  console.log('Eliminando y sincronizando esquema { force: false }');

}).catch(error=>{
   console.log(error.message);
});
*/

// exporta la instancia del ORM para ser utilizada por otros modulos
module.exports = db;
