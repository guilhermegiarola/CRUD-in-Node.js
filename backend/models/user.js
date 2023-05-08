const Sequelize = require("sequelize");
const db = require("../util/database");

const User = db.define("user", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  nome: Sequelize.STRING,
  login: Sequelize.STRING,
  senha: Sequelize.STRING,
  email: Sequelize.STRING,
  telefone: Sequelize.STRING,
  cpf: Sequelize.STRING,
  dataNascimento: Sequelize.STRING,
  nomeMae: Sequelize.STRING,
  statusUsuario: Sequelize.BOOLEAN,
  dataInclusao: Sequelize.DATE,
  dataAlteracao: Sequelize.DATE,
  bloqueado: Sequelize.BOOLEAN,
});

module.exports = User;
