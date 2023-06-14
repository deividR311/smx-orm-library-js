const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return modetable.init(sequelize, DataTypes);
}

class modetable extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    idmodetable: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
     // comment: "Identificador unico (autoincre"
    },
    ideess: {
      type: DataTypes.STRING(14),
      allowNull: false,
      references: {
        model: 'fusion',
        key: 'ideess'
      },
      unique: "ak_ux_modetable_modetabl"
    },
    fdctimestamp: {
      type: DataTypes.DATE,
      allowNull: false,
      unique: "ak_ux_modetable_modetabl"
    },
    status: {
      type: DataTypes.STRING(12),
      allowNull: false,
     // comment: "Estado del registro."
    }
  }, {
    sequelize,
    tableName: 'modetable',
    // schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "ak_ux_modetable_modetabl",
        unique: true,
        fields: [
          { name: "ideess" },
          { name: "fdctimestamp" },
        ]
      },
      {
        name: "modos_fusion_fk",
        fields: [
          { name: "ideess" },
        ]
      },
      {
        name: "pk_modetable",
        unique: true,
        fields: [
          { name: "idmodetable" },
        ]
      },
    ]
  });
  return modetable;
  }
}
