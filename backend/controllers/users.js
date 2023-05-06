const Usuario = require("../models/user");

//CRUD Controllers

//listar todos os usuarios
exports.listarUsuarios = (req, res, next) => {
  Usuario.findAll({
    where: {
      statusUsuario: req.body.statusUsuario,
    },
  })
    .then((users) => {
      res.status(200).json({ users: users });
    })
    .catch((err) => console.log(err));
};

//listar todos os usuarios
exports.listarUsuariosInativos = (req, res, next) => {
  Usuario.findAll({
    where: {
      statusUsuario: false,
    },
  })
    .then((users) => {
      res.status(200).json({ users: users });
    })
    .catch((err) => console.log(err));
};

//retornar um usuario especifico
exports.encontrarUsuario = (req, res, next) => {
  const userId = req.params.id;
  Usuario.findByPk(userId)
    .then((user) => {
      if (!user) {
        return res.status(404).json({ message: "O usuario nao existe." });
      }
      res.status(200).json({ user: user });
    })
    .catch((err) => console.log(err));
};

//inserir um novo usuario
exports.inserirUsuario = (req, res, next) => {
  Usuario.create({
    nome: req.body.nome,
    login: req.body.login,
    senha: req.body.senha,
    email: req.body.email,
    telefone: req.body.telefone,
    cpf: req.body.cpf,
    dataNascimento: req.body.dataNascimento,
    nomeMae: req.body.nomeMae,
    statusUsuario: true,
    dataInclusao: Date.now(),
    dataAlteracao: Date.now(),
  })
    .then((result) => {
      console.log("Usuario criado.");
      res.status(201).json({
        message: "Usuario criado com sucesso.",
        user: result,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

//alterar um usuario
exports.alterarUsuario = (req, res, next) => {
  const idUsuario = req.params.id;
  const nome = req.params.nome;
  const login = req.body.login;
  const senha = req.body.senha;
  const email = req.body.email;
  const telefone = req.body.telefone;
  const cpf = req.body.cpf;
  const dataNascimento = req.body.dataNascimento;
  const nomeMae = req.body.nomeMae;

  Usuario.findByPk(idUsuario)
    .then((user) => {
      if (!user) {
        return res.status(404).json({ message: "Usuario nao encontrado!" });
      }
      user.nome = nome;
      user.login = login;
      user.senha = senha;
      user.email = email;
      user.telefone = telefone;
      user.cpf = cpf;
      user.dataNascimento = dataNascimento;
      user.nomeMae = nomeMae;
      user.dataAlteracao = Date.now();
      return user.save();
    })
    .then((result) => {
      res.status(200).json({ message: "Usuario atualizado!", user: result });
    })
    .catch((err) => console.log(err));
};

//excluir um usuario da base
exports.excluirUsuario = (req, res, next) => {
  const idUsuario = req.params.id;
  Usuario.findByPk(idUsuario)
    .then((user) => {
      if (!user) {
        return res.status(404).json({ message: "Usuario nao encontrado!" });
      }
      user.statusUsuario = false;
      user.dataAlteracao = Date.now();
      return user.save();
    })
    .then((result) => {
      res
        .status(200)
        .json({ message: "Exclusao logica realizada.", user: result });
    })
    .catch((err) => console.log(err));
};
