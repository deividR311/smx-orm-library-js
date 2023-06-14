const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return sovos_users.init(sequelize, DataTypes);
}

class sovos_users extends Sequelize.Model{
    static init(sequelize, DataTypes){
        super.init({
            rut: {
                type: DataTypes.STRING(16),
                allowNull: false,
                primaryKey: true,
            },
            username: {
                type: DataTypes.STRING(100),
                allowNull: false,                    
            },
            password: {
                type: DataTypes.STRING(100),
                allowNull: false,
            },                
            createdat: {
                type: DataTypes.DATE,
                allowNull: false
            },
            updatedat: {
                type: DataTypes.DATE,
                allowNull: false
            }
        },
        {
            sequelize,
            tableName: 'sovos_users',
            timestamps: true,
            indexes: [
                {
                    name: "pk_sovos_users",
                    unique: true,
                    fields: [
                        { name: "rut" },
                    ]
                },
                ]
        });
        return sovos_users;
    }
}