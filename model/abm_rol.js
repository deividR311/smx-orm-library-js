const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return abm_rol.init(sequelize, DataTypes);
}

class abm_rol extends Sequelize.Model{
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
                    type: DataTypes.STRING(50),
                    allowNull: false
                },
                descripcion: {
                    type: DataTypes.STRING(120),
                    allowNull: true
                },
                tipo: {
                    type: DataTypes.STRING(50),
                    allowNull: true
                }
            },
            {
                sequelize,
                tableName: 'abm_roles',
                timestamps: true
            }
        );
        return abm_rol;
    }
}