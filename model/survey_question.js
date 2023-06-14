const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return survey_question.init(sequelize, DataTypes);
}

class survey_question extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    idsurveyquestion: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
     // comment: "Identificador interno del regi"
    },
    idsurvey: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'survey',
        key: 'idsurvey'
      }
    },
    idquestion: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'question',
        key: 'idquestion'
      }
    },
    questionnumber: {
      type: DataTypes.SMALLINT,
      allowNull: false,
     // comment: "Numero que refleja la secuenci"
    }
  }, {
    sequelize,
    tableName: 'survey_question',
    // schema: 'dbo',
    timestamps: true,
    indexes: [
      {
        name: "encuesta_posee_preguntas_fk",
        fields: [
          { name: "idsurvey" },
        ]
      },
      {
        name: "pk_survey_question",
        unique: true,
        fields: [
          { name: "idsurveyquestion" },
        ]
      },
      {
        name: "texto_dela_pregunta_fk",
        fields: [
          { name: "idquestion" },
        ]
      },
    ]
  });
  return survey_question;
  }
}
