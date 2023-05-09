import { useState, useEffect } from "react";
import axios from "axios";
import Router, { useRouter } from "next/router";
import Header from "../../components/Header";
import styles from "./index.module.css";
import { data } from "autoprefixer";
export default function EditarUsuario() {
  const router = useRouter();
  console.log(router.query.myData);
  const user = JSON.parse(router.query.myData);
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [telefone, setTelefone] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [nomeMae, setNomeMae] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [bloqueado, setBloqueado] = useState(false);
  const [loadedPage, setLoadedPage] = useState(false);
  const [statusUsuario, setStatusUsuario] = useState(true);

  useEffect(() => {
    setLogin(user.login);
    setSenha(user.senha);
    setNome(user.nome);
    setEmail(user.email);
    setCpf(user.cpf);
    setTelefone(user.telefone);
    setDataNascimento(user.dataNascimento);
    setNomeMae(user.nomeMae);
    setBloqueado(user.bloqueado);
    setStatusUsuario(user.statusUsuario);
    setLoadedPage(true);
  }, [loadedPage]);

  const EditarUsuario = () => {
    let req = {
      url: "http://localhost:3000/users/",
      method: "PUT",
      data: {
        id: user.id,
        login: login,
        senha: senha,
        nome: nome,
        email: email,
        cpf: cpf,
        telefone: telefone,
        dataNascimento: dataNascimento,
        nomeMae: nomeMae,
        bloqueado: bloqueado,
        statusUsuario: statusUsuario,
      },
    };

    axios(req)
      .then((data) => {
        setErrorMessage("");
        Router.push("/listaUsuarios");
      })
      .catch((err) => {
        setErrorMessage("Já existe outro usuário com este login.");
        return;
      });
  };

  return (
    <>
      <Header>
        <div className={styles.Title}>Editar Usuário</div>
      </Header>
      <div className={styles.Form}>
        <div className={styles.FormField}>
          <div>
            <span> Login: </span>
            <input
              value={login}
              onChange={(e) => {
                setLogin(e.target.value);
              }}
            />
            <span className={styles.Span}> Senha: </span>
            <input
              value={senha}
              type="password"
              onChange={(e) => {
                setSenha(e.target.value);
              }}
            />
          </div>
        </div>
        <div className={styles.FormField}>
          <span className={styles.Span}> Nome </span>
          <input
            value={nome}
            onChange={(e) => {
              setNome(e.target.value);
            }}
          />
          <span className={styles.Span}>e-Mail: </span>
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className={styles.FormField}>
          <span>CPF: </span>
          <input
            value={cpf}
            onChange={(e) => {
              setCpf(e.target.value);
            }}
          />
          <span className={styles.Span}> Tel.: </span>
          <input
            value={telefone}
            onChange={(e) => {
              setTelefone(e.target.value);
            }}
          />
        </div>
        <div className={styles.FormField}>
          <span>Data de Nascimento: </span>
          <input
            value={dataNascimento}
            onChange={(e) => {
              setDataNascimento(e.target.value);
            }}
          />
          <span className={styles.Span}>Desativar Usuário: </span>
          <input
            type="checkbox"
            value={statusUsuario}
            onChange={(e) => {
              const { checked } = e.target;
              setStatusUsuario(!checked);
            }}
          />
        </div>
        <div className={styles.FormField}>
          <span className={styles.Span}>Nome da Mãe: </span>
          <input
            value={nomeMae}
            onChange={(e) => {
              setNomeMae(e.target.value);
            }}
          />
          <span className={styles.Span}>Bloquear Usuário: </span>
          <input
            type="checkbox"
            value={bloqueado}
            onChange={(e) => {
              const { checked } = e.target;
              setBloqueado(checked);
            }}
          />
        </div>
        <div>
          <button
            className={styles.FormButton}
            onClick={(e) => {
              EditarUsuario();
            }}
          >
            Editar Usuário
          </button>
          <button
            className={styles.FormButton}
            onClick={(e) => {
              Router.push("/listaUsuarios");
            }}
          >
            Voltar para a Lista de Usuários
          </button>
        </div>
        <div>
          <span>
            <b>{errorMessage}</b>
          </span>
        </div>
      </div>
    </>
  );
}
