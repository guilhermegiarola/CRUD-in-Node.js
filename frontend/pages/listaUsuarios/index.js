import Router from "next/router";
export default function ListaUsuarios() {
  return (
    <>
      <div>
        <button
          onClick={(e) => {
            Router.push("/");
          }}
        >
          Voltar para a tela de Login
        </button>
      </div>
      <span>Lista de Usuarios!</span>
      <div>
        <button
          onClick={(e) => {
            Router.push("/cadastrarUsuario");
          }}
        >
          Cadastrar Usuario
        </button>
        <button>Exportar para PDF</button>
        <button>Exportar para Excel</button>
        <button>Exportar para Word</button>
      </div>
    </>
  );
}
