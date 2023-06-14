const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return dsps.init(sequelize, DataTypes);
}

class dsps extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    iddsps: {
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
      unique: "ak_ux_dsps_dsps"
    },
    dspdeviceid: {
      type: DataTypes.SMALLINT,
      allowNull: false,
     // comment: "Identificador del dispositivo ",
      unique: "ak_ux_dsps_dsps"
    },
    fdctimestamp: {
      type: DataTypes.DATE,
      allowNull: false,
     // comment: "Timestamp de la respuesta info",
      unique: "ak_ux_dsps_dsps"
    },
    dspdevicetype: {
      type: DataTypes.STRING(10),
      allowNull: false,
     // comment: "Tipo de dispositivo que se inf"
    },
    status: {
      type: DataTypes.STRING(12),
      allowNull: false,
     // comment: "Estado del registro."
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
    tableName: 'dsps',
    // schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "ak_ux_dsps_dsps",
        unique: true,
        fields: [
          { name: "ideess" },
          { name: "dspdeviceid" },
          { name: "fdctimestamp" },
        ]
      },
      {
        name: "dispensadores_fusion_fk",
        fields: [
          { name: "ideess" },
        ]
      },
      {
        name: "pk_dsps",
        unique: true,
        fields: [
          { name: "iddsps" },
        ]
      },
    ]
  });
  return dsps;
  }
}
