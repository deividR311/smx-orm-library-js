const dotenv = require('dotenv');
const path = require('path');

// parsea el .env relativo al directorio de este modulo
const rutaRelativa  = __dirname;
const rutaLibreria = '\\node_modules\\smx-orm'
const rutaenv = rutaRelativa.replace(rutaLibreria,'')
const result = dotenv.config({ path: path.resolve(rutaenv, './.env') });

// verifica si hubo error
/*if (result.error) {
  throw new Error('No fue posible configurar el ambiente de base de datos. Error: ' + result.error);
}*/

/**
 * Configuracion de conexion a base de datos.
 */
const env = {
    dialect: 'mssql',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    logging: process.env.DB_LOGGING,

    dialectOptions: {
        requestTimeout: process.env.DB_DIALECT_REQUESTTIMEOUT
    },
    
    pool: {
      max: process.env.DB_POOL_MAX,
      min: process.env.DB_POOL_MIN,
      acquire: process.env.DB_POOL_ACQUIRE,
      idle: process.env.DB_POOL_IDLE,
      evict: process.env.DB_POOL_EVICT
    }
  };

  // feedback
  console.log(`Configurando base de datos a [host:${env.host}, port:${env.port}, database:${env.database}]`);
  console.log(`Environment: ${JSON.stringify(env)}`);

  module.exports = env;
  