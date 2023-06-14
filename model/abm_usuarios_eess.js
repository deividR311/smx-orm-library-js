const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return abm_usuarios_eess.init(sequelize, DataTypes);
}

class abm_usuarios_eess extends Sequelize.Model{
    static init(sequelize, DataTypes){
        super.init(
            {
                abm_usuarios_eessId: {
                    type: DataTypes.BIGINT,
                    allowNull: false,
                    primaryKey: true,
                    autoIncrement: true
                },
                userGuid: {
                    type: DataTypes.STRING(250),
                    allowNull: false
                },
                ideess: {
                    type: DataTypes.BIGINT,
                    allowNull: false
                },
            },
            {
                sequelize,
                tableName: 'abm_usuarios_eess',
                timestamps: true
            }
        );
        return abm_usuarios_eess;
    }
}