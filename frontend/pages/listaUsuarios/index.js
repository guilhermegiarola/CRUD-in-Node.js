import Router from "next/router";
import axios from "axios";
import { useEffect, useState } from "react";
import PaginatedList from "../../components/PaginatedList";
import Link from "next/link";
import Header from "../../components/Header";
import Filters from "../../components/Filters";
import styles from "./index.module.css";
import { generatePDF, generateXML } from "../../util/exportingTables";
export default function ListaUsuarios() {
  const [listaUsuarios, setListaUsuarios] = useState([]);
  const [loadedPage, setLoadedPage] = useState(false);
  const [totalRegistros, setTotalRegistros] = useState(0);
  const [listarInativos, setListarInativos] = useState(true);

  const DesativarUsuario = (id) => {
    let req = {
      url: `http://localhost:3000/users/excluir/${id}`,
      method: "PUT",
      data: {
        desativar: !listarInativos,
      },
    };

    axios(req).then((data) => {
      console.log(data.data.message);
    });
    setListaUsuarios(listaUsuarios.filter((el) => el.id !== id));
  };

  const BloquearUsuario = (id) => {
    let req = {
      url: `http://localhost:3000/users/bloquear`,
      method: "PUT",
      data: {
        id: id,
      },
    };

    axios(req).then((data) => {
      alert(data.data.message);
    });
  };

  const EditarUsuario = (usuario) => {
    Router.push(
      {
        pathname: "/editarUsuario",
        query: {
          myData: JSON.stringify(usuario),
        },
      },
      "editarUsuario"
    );
  };

  useEffect(() => {
    let req = {
      url: "http://localhost:3000/users/listar",
      method: "GET",
      params: {
        statusUsuario: listarInativos,
      },
    };

    axios(req).then((data) => {
      setListaUsuarios(data.data.users);
    });
    setTotalRegistros(listaUsuarios.length);

    if (!loadedPage) {
      setLoadedPage(false);
    }
  }, [listarInativos, loadedPage]);

  useEffect(() => {
    console.log(listaUsuarios);
  }, [listaUsuarios]);

  return (
    <>
      <Header>
        <Link href="/" className={styles.forgotPassword}>
          Voltar para a tela de Login
        </Link>
        <span> Total de registros: {totalRegistros}</span>
      </Header>
      <div style={{ display: "flex" }}>
        <div>
          <Filters
            items={listaUsuarios}
            setListaUsuarios={setListaUsuarios}
            setListarInativos={setListarInativos}
          />
        </div>
        <div>
          {!listarInativos ? (
            <PaginatedList
              items={listaUsuarios}
              setListaUsuarios={setListaUsuarios}
              buttonLabel="Ativar"
              DesativarUsuario={DesativarUsuario}
              EditarUsuario={EditarUsuario}
              BloquearUsuario={BloquearUsuario}
            />
          ) : (
            <PaginatedList
              items={listaUsuarios}
              buttonLabel="Desativar"
              DesativarUsuario={DesativarUsuario}
              EditarUsuario={EditarUsuario}
              BloquearUsuario={BloquearUsuario}
            />
          )}
          <div className={styles.buttonDiv}>
            <button
              className={styles.button}
              onClick={(e) => {
                Router.push("/cadastrarUsuario");
              }}
            >
              Cadastrar Usuario
            </button>
            <button
              className={styles.button}
              onClick={(e) => {
                generatePDF(listaUsuarios);
              }}
            >
              Exportar para PDF
            </button>
            <button
              className={styles.button}
              onClick={(e) => {
                generateXML(listaUsuarios);
              }}
            >
              Exportar para Excel
            </button>
            <button className={styles.button}>Exportar para Word</button>
          </div>
        </div>
      </div>
    </>
  );
}
