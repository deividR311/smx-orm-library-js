const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return modetable_item.init(sequelize, DataTypes);
}

class modetable_item extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    idmodetable: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
     // comment: "Identificador unico (autoincre",
      references: {
        model: 'modetable',
        key: 'idmodetable'
      }
    },
    modeno: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      primaryKey: true,
     // comment: "Numero de Modo. Unico dentro d"
    },
    modename: {
      type: DataTypes.STRING(10),
      allowNull: false,
     // comment: "Nombre del modo"
    }
  }, {
    sequelize,
    tableName: 'modetable_item',
    // schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "items_modetable_fk",
        fields: [
          { name: "idmodetable" },
        ]
      },
      {
        name: "pk_modetable_item",
        unique: true,
        fields: [
          { name: "modeno" },
          { name: "idmodetable" },
        ]
      },
    ]
  });
  return modetable_item;
  }
}
