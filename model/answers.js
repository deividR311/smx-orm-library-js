const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return answers.init(sequelize, DataTypes);
}

class answers extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    idanswer: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    idoption: {
      type: DataTypes.BIGINT,
      allowNull: false,
     // comment: "Identificador interno de la op",
      references: {
        model: 'valid_options',
        key: 'idoption'
      }
    },
    answerusername: {
      type: DataTypes.STRING(14),
      allowNull: true
    },
    answeruser: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    answerusercustomtext: {
      type: DataTypes.STRING(512),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'answers',
    // schema: 'dbo',
    timestamps: true,
    indexes: [
      {
        name: "answer_option_fk",
        fields: [
          { name: "idoption" },
        ]
      },
      {
        name: "pk_answers",
        unique: true,
        fields: [
          { name: "idanswer" },
        ]
      },
    ]
  });
  return answers;
  }
}
