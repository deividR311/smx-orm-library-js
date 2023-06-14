const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return abm_usuario_rol.init(sequelize, DataTypes);
}

class abm_usuario_rol extends Sequelize.Model{
    static init(sequelize, DataTypes){
        super.init(
            {
                id: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    primaryKey: true,
                    autoIncrement: true
                },
                fk_rol: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    references: {
                        model: 'abm_rol',
                        key: 'id'
                    }
                },
                fk_usuario: {
                    type: DataTypes.STRING(36),
                    allowNull: false,
                    references: {
                        model: 'abm_usuario',
                        key: 'guid'
                    }
                }
            },
            {
                sequelize,
                tableName: 'abm_usuario_rol',
                timestamps: true
            }
        );
        return abm_usuario_rol;
    }
}