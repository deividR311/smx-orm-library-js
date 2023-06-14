const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return roles.init(sequelize, DataTypes);
}

class roles extends Sequelize.Model{
    static init(sequelize, DataTypes){
        super.init(
            {
                id: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    primaryKey: true,
                },
                name: {
                    type: DataTypes.STRING(20),
                    allowNull: false,
                }
            },
            {
                sequelize,
                tableName: 'roles',
                timestamps: false
            }
        );
        return roles;
    }
}