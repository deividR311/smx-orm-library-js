const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return abm_permisos_modulo.init(sequelize, DataTypes);
}

class abm_permisos_modulo extends Sequelize.Model{
    static init(sequelize, DataTypes){
        super.init(
            {
                id: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    primaryKey: true,
                    autoIncrement: true
                },
                nombre: {
                    type: DataTypes.STRING(120),
                    allowNull: false
                },
                ruta: {
                    type: DataTypes.STRING(200),
                    allowNull: false
                },
                estado: {
                    type: DataTypes.BOOLEAN,
                    allowNull: false
                },
                fk_estacion_servicio: {
                    type: DataTypes.INTEGER,
                    allowNull: true,
                    references: {
                        model: 'abm_estaciones_servicio',
                        key: 'id'
                    }
                },
                fk_permiso_modulo: {
                    type: DataTypes.INTEGER,
                    allowNull: true
                }
            },
            {
                sequelize,
                tableName: 'abm_permisos_modulos',
                timestamps: true
            }
        );
        return abm_permisos_modulo;
    }
}