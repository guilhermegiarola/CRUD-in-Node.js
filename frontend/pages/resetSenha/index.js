import { useState } from "react";
import axios from "axios";
import Router from "next/router";
import Header from "../../components/Header";
import styles from "./index.module.css";

export default function ResetSenha() {
  const [login, setLogin] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const RecuperarSenha = () => {
    let req = {
      url: "http://localhost:3000/users/recuperarSenha",
      method: "PUT",
      data: {
        login: login,
        cpf: cpf,
        email: email,
      },
    };

    axios(req).then((data) => {
      if (data.data.senha !== undefined) {
        alert("A sua senha é " + data.data.senha);
      } else {
        alert(data.data.message);
      }
    });
  };

  return (
    <>
      <Header>
        <div className={styles.Title}>Esqueceu sua Senha?</div>
      </Header>
      <div className={styles.Form}>
        <span className={styles.Span}>
          Insira os dados abaixo para recuperação da sua senha.
        </span>
        <div className={styles.FormField}>
          <span>Login: </span>
          <input
            onChange={(e) => {
              setLogin(e.target.value);
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
        </div>
        <div className={styles.FormField}>
          <span>E-mail: </span>
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div>
          <button
            className={styles.FormButton}
            onClick={(e) => {
              RecuperarSenha();
            }}
          >
            Recuperar Senha
          </button>
          <button
            className={styles.FormButton}
            onClick={(e) => {
              Router.push("/");
            }}
          >
            Voltar para a Tela de Login
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
