let EmailValidator = require("email-validator");

exports.validarCamposVazios = (req) => {
  return Object.values(req.body).filter((e) => e === "").length > 0;
};

exports.validarEmail = (email) => {
  return EmailValidator.validate(email);
};

exports.validarTelefone = (telefone) => {
  telefone = telefone.replace(/[^a-zA-Z0-9]\s/g, "");
  return !isNaN(telefone) && telefone.length >= 8 && telefone.length <= 11;
};

exports.validarCpf = (cpf) => {
  cpf = cpf.replace(/[^a-zA-Z0-9]/g, "");
  console.log(cpf, cpf.length);
  return cpf.length === 11;
};
