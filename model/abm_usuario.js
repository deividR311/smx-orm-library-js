const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return abm_usuario.init(sequelize, DataTypes);
}

class abm_usuario extends Sequelize.Model{
    static init(sequelize, DataTypes){
        super.init(
            {
                guid: {
                    type: DataTypes.STRING(36),
                    allowNull: false,
                    primaryKey: true,
                    autoIncrement: false
                },
                nombre: {
                    type: DataTypes.STRING(120),
                    allowNull: false
                },
                username: {
                    type: DataTypes.STRING(50),
                    allowNull: false
                },
                password: {
                    type: DataTypes.STRING(80),
                    allowNull: false
                },
                email: {
                    type: DataTypes.STRING(120),
                    allowNull: true
                },
                estado: {
                    type: DataTypes.BOOLEAN,
                    allowNull: false
                }
            },
            {
                sequelize,
                tableName: 'abm_usuarios',
                timestamps: true
            }
        );
        return abm_usuario;
    }
}