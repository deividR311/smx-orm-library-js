const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return atendedores_session.init(sequelize, DataTypes);
}

class atendedores_session extends Sequelize.Model{
    static init(sequelize, DataTypes){
        super.init(
            {
                idsession: {
                    type: DataTypes.STRING(50),
                    allowNull: false,
                    primaryKey: true,
                },
                rut: {
                    type: DataTypes.STRING(20),
                    allowNull: false,
                },
                active: {
                    type: DataTypes.BOOLEAN,
                    allowNull: false
                }
            },
            {
                sequelize,
                tableName: 'atendedores_session',
                timestamps: true
            }
        );
        return atendedores_session;
    }
}