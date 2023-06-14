const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return valid_options.init(sequelize, DataTypes);
}

class valid_options extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    idoption: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
     // comment: "Identificador interno de la op"
    },
    idquestion: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'question',
        key: 'idquestion'
      }
    },
    optionnumber: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    optiontext: {
      type: DataTypes.STRING(128),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'valid_options',
    // schema: 'dbo',
    timestamps: true,
    indexes: [
      {
        name: "opciones_respuesta_pregunta_fk",
        fields: [
          { name: "idquestion" },
        ]
      },
      {
        name: "pk_valid_options",
        unique: true,
        fields: [
          { name: "idoption" },
        ]
      },
    ]
  });
  return valid_options;
  }
}
