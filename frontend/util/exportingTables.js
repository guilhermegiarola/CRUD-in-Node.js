import axios from "axios";
import jsPDF from "jspdf";
import "jspdf-autotable";
import exportFromJSON from "export-from-json";

export const generateXML = (data) => {
  data.forEach((element) => {
    delete element.id;
    delete element.senha;
    delete element.statusUsuario;
    delete element.dataInclusao;
    delete element.dataAlteracao;
    delete element.bloqueado;
    delete element.createdAt;
    delete element.updatedAt;
  });
  const filename = `listaUsuarios`;
  const exportType = exportFromJSON.types.csv;
  exportFromJSON({ data, filename, exportType });
};

export const generatePDF = (data) => {
  const document = new jsPDF("l");
  const tableColumn = [
    "Login",
    "Nome",
    "E-mail",
    "CPF",
    "Telefone",
    "Data de Nascimento",
    "Nome da Mãe",
  ];

  const tableRows = [];

  data.forEach((element) => {
    const userData = [
      element.login,
      element.nome,
      element.email,
      element.cpf,
      element.telefone,
      element.dataNascimento,
      element.nomeMae,
    ];
    tableRows.push(userData);
  });

  document.autoTable(tableColumn, tableRows, { startY: 20 });
  document.text("Lista de Usuários: ", 14, 15);
  document.save(`listaUsuarios.pdf`);
};

export const generateDOC = (list) => {
  let req = {
    url: "http://localhost:3000/util/generatedocument",
    method: "PUT",
    data: {
      list: list,
    },
  };

  axios(req).then((data) => {
    console.log(data.data.message);
  });
};
