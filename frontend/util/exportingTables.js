import jsPDF from "jspdf";
import "jspdf-autotable";

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