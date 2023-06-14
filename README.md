# smx-orm
Modulo ORM para base de datos del sistema de autoatencion
## Instalación

El siguiente comando actualiza los modulos utilizados en el directorio `node_modules`

```bash
npm install
```
## Configuración
El módulo esta diseñado para ser utilizado como biblioteca por otros módulos.

No obstante lo anterior, es necesario configurar el ambiente antes de proceder a su utilización.

La configuración se realiza estableciendo variables de ambiente antes de la ejecución, o bien, creando un archivo **`.env`** en la carpeta `config/config-database`.

Las variables de ambiente que deben ser establecidas corresponden a:

```properties
## -------------------------
## ambiente de base de datos
## -------------------------
DB_HOST=<host de la base de datos>
DB_PORT=<puerto>
DB_USERNAME=<username>
DB_PASSWORD=<password>
DB_DATABASE=<nombre de la base de datos>
DB_LOGGING=<logging o no (true/false) de sentencias sql>
DB_DIALECT_REQUESTTIMEOUT=<tiempo de espera para una respuesta>
DB_POOL_MAX=<tamaño maximo del pool>
DB_POOL_MIN=<tamaño minimo del pool>
DB_POOL_ACQUIRE=<tiempo de espera (ms) en adquirir una conexion para el pool>
DB_POOL_IDLE=<tiempo de espera (ms) en que una conexion puede permanecer sin actividad en el pool.>
```

### Consideraciones
- El archivo **.env** no debe ser versionado.
