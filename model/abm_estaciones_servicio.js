const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return abm_estaciones_servicio.init(sequelize, DataTypes);
}

class abm_estaciones_servicio extends Sequelize.Model{
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
                eess: {
                    type: DataTypes.INTEGER,
                    allowNull: false
                }
            },
            {
                sequelize,
                tableName: 'abm_estaciones_servicio',
                timestamps: false
            }
        );
        return abm_estaciones_servicio;
    }
}