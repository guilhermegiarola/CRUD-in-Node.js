import { useState } from "react";
import axios from "axios";
import Router from "next/router";
import Header from "../../components/Header";
import styles from "./index.module.css";
export default function CadastrarUsuario() {
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [telefone, setTelefone] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [nomeMae, setNomeMae] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const CadastrarUsuario = () => {
    let req = {
      url: "http://localhost:3000/users/",
      method: "POST",
      data: {
        login: login,
        senha: senha,
        nome: nome,
        email: email,
        cpf: cpf,
        telefone: telefone,
        dataNascimento: dataNascimento,
        nomeMae: nomeMae,
      },
    };

    axios(req)
      .then((data) => {
        setErrorMessage("");
        Router.push("/listaUsuarios");
      })
      .catch((err) => {
        setErrorMessage("Já existe outro usuário com este CPF.");
        return;
      });
  };

  return (
    <>
      <Header>
        <div className={styles.Title}>Cadastrar Usuário</div>
      </Header>
      <div className={styles.Form}>
        <div className={styles.FormField}>
          <div>
            <span> Login: </span>
            <input
              onChange={(e) => {
                setLogin(e.target.value);
              }}
            />
            <span className={styles.Span}> Senha: </span>
            <input
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
            onChange={(e) => {
              setNome(e.target.value);
            }}
          />
          <span className={styles.Span}>e-Mail: </span>
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className={styles.FormField}>
          <span>CPF: </span>
          <input
            onChange={(e) => {
              setCpf(e.target.value);
            }}
          />
          <span className={styles.Span}> Tel.: </span>
          <input
            onChange={(e) => {
              setTelefone(e.target.value);
            }}
          />
        </div>
        <div className={styles.FormField}>
          <span>Data de Nascimento: </span>
          <input
            onChange={(e) => {
              setDataNascimento(e.target.value);
            }}
          />
        </div>
        <div className={styles.FormField}>
          <span className={styles.Span}>Nome da Mãe: </span>
          <input
            onChange={(e) => {
              setNomeMae(e.target.value);
            }}
          />
        </div>
        <div>
          <button
            className={styles.FormButton}
            onClick={(e) => {
              CadastrarUsuario();
            }}
          >
            Cadastrar Usuário
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
