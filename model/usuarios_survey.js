const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return usuarios_survey.init(sequelize, DataTypes);
}

class usuarios_survey extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    essur_id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
     // comment: "Identificador autoincremental"
    },
    essur_token: {
      type: DataTypes.STRING,
      allowNull: false,
     // comment: "Token"
    },
    essur_evaluation: {
      type: DataTypes.STRING(10),
      allowNull: false,
     // comment: "Evaluacion"
    },
    essur_comments: {
      type: DataTypes.STRING(512),
      allowNull: true
    },
    essur_reason: {
      type: DataTypes.STRING,
      allowNull: true,
     // comment: "Temas/Preguntas"
    }
  }, {
    sequelize,
    tableName: 'usuarios_survey',
    // schema: 'dbo',
    timestamps: true,
    indexes: [
      {
        name: "pk_usuarios_survey",
        unique: true,
        fields: [
          { name: "essur_id" },
        ]
      },
    ]
  });
  return usuarios_survey;
  }
}
