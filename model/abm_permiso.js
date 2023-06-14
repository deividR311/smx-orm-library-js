const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return abm_permiso.init(sequelize, DataTypes);
}

class abm_permiso extends Sequelize.Model{
    static init(sequelize, DataTypes){
        super.init(
            {
                id: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    primaryKey: true,
                    autoIncrement: true
                },
                crear: {
                    type: DataTypes.BOOLEAN,
                    allowNull: false
                },
                actualizar: {
                    type: DataTypes.BOOLEAN,
                    allowNull: false
                },
                leer: {
                    type: DataTypes.BOOLEAN,
                    allowNull: false
                },
                eliminar: {
                    type: DataTypes.BOOLEAN,
                    allowNull: false
                },
                fk_rol: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    references: {
                        model: 'abm_rol',
                        key: 'id'
                    }
                },
                fk_permiso_modulo: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    references: {
                        model: 'abm_permiso_modulo',
                        key: 'id'
                    }
                }
            },
            {
                sequelize,
                tableName: 'abm_permisos',
                timestamps: true
            }
        );
        return abm_permiso;
    }
}