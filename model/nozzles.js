const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return nozzles.init(sequelize, DataTypes);
}

class nozzles extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    idfps: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
     // comment: "Identificador unico (autoincre",
      references: {
        model: 'fps',
        key: 'idfps'
      }
    },
    nozzleno: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      primaryKey: true
    },
    productno: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    tankno1: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    tankno2: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    blendratio: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    devicereadertype: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    logicalid: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    lasteventstatus: {
      type: DataTypes.STRING(24),
      allowNull: true,
      defaultValue: "INICIAL",
     // comment: "Estado general en que queda el"
    },
    lasteventdata: {
      type: DataTypes.STRING,
      allowNull: true,
     // comment: "Contenido del evento que cambi"
    }
  }, {
    sequelize,
    tableName: 'nozzles',
    // schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "boquillas_en_posicion_de_carga_fk",
        fields: [
          { name: "idfps" },
        ]
      },
      {
        name: "pk_nozzles",
        unique: true,
        fields: [
          { name: "idfps" },
          { name: "nozzleno" },
        ]
      },
    ]
  });
  return nozzles;
  }
}
