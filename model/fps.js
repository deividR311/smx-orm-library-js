const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return fps.init(sequelize, DataTypes);
}

class fps extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    idfps: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
     // comment: "Identificador unico (autoincre"
    },
    iddsps: {
      type: DataTypes.BIGINT,
      allowNull: false,
     // comment: "Identificador unico (autoincre",
      references: {
        model: 'dsps',
        key: 'iddsps'
      },
      unique: "ak_ux_fps_fps"
    },
    fpdeviceid: {
      type: DataTypes.SMALLINT,
      allowNull: false,
     // comment: "Identificador del dispositivo.",
      unique: "ak_ux_fps_fps"
    },
    pumpno: {
      type: DataTypes.SMALLINT,
      allowNull: false,
     // comment: "Numero de bomba. Unico en cada",
      unique: "ak_ux_fps_fps"
    },
    fpdevicetype: {
      type: DataTypes.STRING(10),
      allowNull: false,
     // comment: "Tipo de dispositivo."
    },
    terminalno: {
      type: DataTypes.SMALLINT,
      allowNull: true,
     // comment: "Numero de terminal"
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
    tableName: 'fps',
    // schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "ak_ux_fps_fps",
        unique: true,
        fields: [
          { name: "iddsps" },
          { name: "fpdeviceid" },
          { name: "pumpno" },
        ]
      },
      {
        name: "pk_fps",
        unique: true,
        fields: [
          { name: "idfps" },
        ]
      },
      {
        name: "posiciones_de_carga_fk",
        fields: [
          { name: "iddsps" },
        ]
      },
    ]
  });
  return fps;
  }
}
