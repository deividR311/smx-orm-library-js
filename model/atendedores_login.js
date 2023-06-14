const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return atendedores_login.init(sequelize, DataTypes);
}

class atendedores_login extends Sequelize.Model{
    static init(sequelize, DataTypes){
        super.init(
            {
                id: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    primaryKey: true,
                    autoIncrement: true
                },
                rut: {
                    type: DataTypes.STRING(14),
                    allowNull: false,
                    references: {
                        model: 'atendedores',
                        key: 'rut'
                    }
                },
                password: {
                    type: DataTypes.STRING(80),
                    allowNull: false
                },
                firstlogin: {
                    type: DataTypes.BOOLEAN,
                    allowNull: false
                }
            },
            {
                sequelize,
                tableName: 'atendedores_login',
                timestamps: true
            }
        );
        return atendedores_login;
    }
}