import Router from "next/router";
import axios from "axios";
import { useEffect, useState } from "react";
import PaginatedList from "../../components/PaginatedList";
export default function ListaUsuarios() {
  const [listaUsuarios, setListaUsuarios] = useState([]);
  const [loadedPage, setLoadedPage] = useState(false);
  const [totalRegistros, setTotalRegistros] = useState(0);

  useEffect(() => {
    let req = {
      url: "http://localhost:3000/users/listar",
      method: "GET",
    };

    axios(req).then((data) => {
      setListaUsuarios(data.data.users);
    });
    setTotalRegistros(listaUsuarios.length);

    if (!loadedPage) {
      setLoadedPage(false);
    }
  }, [loadedPage, listaUsuarios.length]);

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
        <span> Total de registros: {totalRegistros}</span>
      </div>
      <PaginatedList items={listaUsuarios} />
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
