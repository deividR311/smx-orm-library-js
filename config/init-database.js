const configdatabase = require('./config-database.js');
const Sequelize = require('sequelize');

// sobrescribe el formato del timezone. BUG de sequelize para MSSQL
Sequelize.DATE.prototype._stringify = function _stringify(date, options) {
  date = this._applyTimezone(date, options);
  return date.format('YYYY-MM-DD HH:mm:ss.SSS');
};

// obtiene el timeoffset local
const localTimeoffset = new Date().getTimezoneOffset().toString();

const sequelize = new Sequelize(
   configdatabase.database,
   configdatabase.username,
   configdatabase.password,
  {
  host: configdatabase.host,
  // port: configdatabase.port,
  dialect: configdatabase.dialect,
  // operatorsAliases: '0', //'1' true, '0' false
  // timezone: localTimeoffset, //-03:00
  dialectOptions: {
    useUTC: false,
    requestTimeout: configdatabase.dialectOptions.requestTimeout,
    options: {
      validateBulkLoadParameters: true,
      requestTimeout: 60000,
      encrypt: true
    }
  },
  pool: {
    max: parseInt(configdatabase.pool.max, 10),
    min: parseInt(configdatabase.pool.min, 10),
    // acquire: parseInt(configdatabase.pool.acquire, 10),
    idle: parseInt(configdatabase.pool.idle, 10),
    // evict: parseInt(configdatabase.pool.evict, 10)
  }
});

// objeto para almacenar informacion de la base de datos
const db = {};

// referencia a la biblioteca
db.Sequelize = Sequelize;

// referencia de la conexion a la base de datos
db.sequelize = sequelize;

// prueba la conexion
sequelize.authenticate().then(() => {
  console.log('La conexion se ha establecido...');

}).catch((error) => {
  console.error('No fue posible establecer la conexion con la base de datos:', error);

});

// exporta la instancia de base de datos para que pueda ser utilizada en otros modulos
module.exports = db;