const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return atendedores.init(sequelize, DataTypes);
}

class atendedores extends Sequelize.Model{
    static init(sequelize, DataTypes){
        super.init(
            {
                rut: {
                    type: DataTypes.STRING(14),
                    allowNull: false,
                    primaryKey: true,
                },
                idrol: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    references: {
                        model: 'roles',
                        key: 'id'
                    }
                },
                nombre: {
                    type: DataTypes.STRING(25),
                    allowNull: false,
                },
                apellido: {
                    type: DataTypes.STRING(25),
                    allowNull: false,
                },
                ideess:{
                    type: DataTypes.STRING(14),
                    allowNull: false,
                    references: {
                        model: 'ee_ss',
                        key: 'ideess'
                    }
                },
                lastsessiondat: {
                    type: DataTypes.DATE,
                    allowNull: true
                },
                desactivationdat: {
                    type: DataTypes.DATE,
                    allowNull: true
                },
                active: {
                    type: DataTypes.BOOLEAN,
                    allowNull: true
                },
                id: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    autoIncrement: true
                }
            },
            {
                sequelize,
                tableName: 'atendedores',
                timestamps: true
            }
        );
        return atendedores;
    }
}