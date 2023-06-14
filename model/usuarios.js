const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return usuarios.init(sequelize, DataTypes);
}

class usuarios extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    rut: {
      type: DataTypes.STRING(14),
      allowNull: false,
      primaryKey: true,
     // comment: "Rol Unico Tributario",
      references: {
        model: 'personas',
        key: 'rut'
      }
    },
    tipousuario: {
      type: DataTypes.STRING(12),
      allowNull: false,
      defaultValue: "PERSONA",
     // comment: "Tipo de usuario. PERSONA\/EMPRE"
    },
    username: {
      type: DataTypes.STRING(50),
      allowNull: false,
     // comment: "username utilizado para identi"
    },
    password: {
      type: DataTypes.STRING(80),
      allowNull: false,
     // comment: "Password para ingresar al sist"
    },
    nrocelular: {
      type: DataTypes.STRING(24),
      allowNull: true,
     // comment: "Numero de celular ingresado al"
    },
    telefonovalidado: {
      type: DataTypes.STRING(12),
      allowNull: true,
     // comment: "Estado de la validacion del te"
    },
    email: {
      type: DataTypes.STRING(321),
      allowNull: true,
     // comment: "Cuenta de correo electronico i"
    },
    emailvalidado: {
      type: DataTypes.STRING(12),
      allowNull: true,
     // comment: "Estado de la validacion del co"
    },
    comuna: {
      type: DataTypes.STRING(64),
      allowNull: true,
     // comment: "Comuna informada al momento de"
    },
    status: {
      type: DataTypes.STRING(12),
      allowNull: false,
     // comment: "Estado del registro."
    },
    resetpasswordsms: {
      type: DataTypes.STRING(10),
      allowNull: true,
     // comment: "Reto enviado por SMS para vali"
    },
    resetpasswordsmsexpires: {
      type: DataTypes.DATE,
      allowNull: true,
     // comment: "Fecha\/Hora de expiracion del r"
    },
    resetpasswordsmsuses: {
      type: DataTypes.SMALLINT,
      allowNull: true,
     // comment: "Numero de veces que se ha util"
    },
    resetpasswordtoken: {
      type: DataTypes.STRING(2048),
      allowNull: true,
     // comment: "Token utilizado para cambiar e"
    },
    resetpasswordexpires: {
      type: DataTypes.DATE,
      allowNull: true,
     // comment: "Fecha\/Hora de expiracion de re"
    },
    resetpasswordtokenuses: {
      type: DataTypes.SMALLINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'usuarios',
    // schema: 'dbo',
    timestamps: true,
    indexes: [
      {
        name: "pk_usuarios",
        unique: true,
        fields: [
          { name: "rut" },
        ]
      },
    ]
  });
  return usuarios;
  }
}
