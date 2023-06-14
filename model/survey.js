const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return survey.init(sequelize, DataTypes);
}

class survey extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    idsurvey: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
     // comment: "Identificador interno del regi"
    },
    status: {
      type: DataTypes.STRING(12),
      allowNull: false,
     // comment: "Estado en que se encuentra una"
    },
    startdate: {
      type: DataTypes.DATE,
      allowNull: false,
     // comment: "Fecha\/Hora de inicio de la enc"
    },
    enddate: {
      type: DataTypes.DATE,
      allowNull: false,
     // comment: "Fecha\/Hora fin de la encuesta."
    }
  }, {
    sequelize,
    tableName: 'survey',
    // schema: 'dbo',
    timestamps: true,
    indexes: [
      {
        name: "pk_survey",
        unique: true,
        fields: [
          { name: "idsurvey" },
        ]
      },
    ]
  });
  return survey;
  }
}
