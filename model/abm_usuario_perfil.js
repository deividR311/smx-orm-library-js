const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return abm_usuario_perfil.init(sequelize, DataTypes);
}

class abm_usuario_perfil extends Sequelize.Model{
    static init(sequelize, DataTypes){
        super.init(
            {
                id: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    primaryKey: true,
                    autoIncrement: true
                },
                descripcion: {
                    type: DataTypes.STRING(50),
                    allowNull: true
                },
                fk_usuario: {
                    type: DataTypes.STRING(36),
                    allowNull: false,
                    references: {
                        model: 'abm_usuario',
                        key: 'guid'
                    }
                },
                fk_perfil: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    references: {
                        model: 'abm_perfil',
                        key: 'id'
                    }
                }
            },
            {
                sequelize,
                tableName: 'abm_usuario_perfil',
                timestamps: true
            }
        );
        return abm_usuario_perfil;
    }
}