const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return question.init(sequelize, DataTypes);
}

class question extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    idquestion: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    questiontext: {
      type: DataTypes.STRING(512),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'question',
    // schema: 'dbo',
    timestamps: true,
    indexes: [
      {
        name: "pk_question",
        unique: true,
        fields: [
          { name: "idquestion" },
        ]
      },
    ]
  });
  return question;
  }
}
