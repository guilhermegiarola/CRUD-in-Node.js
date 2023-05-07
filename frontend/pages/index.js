import axios from "axios";
import styles from "./index.module.css";
import { useState } from "react";
import Router from "next/router";
import Link from "next/link";
import Header from "../components/Header";

export default function Login() {
  const [login, setLogin] = useState("");
  const [loginFieldMessage, setLoginFieldMessage] = useState("");
  const [password, setPassword] = useState("");
  const [passwordFieldMessage, setPasswordFieldMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  function HandleErrorMessages(login, password) {
    login === ""
      ? setLoginFieldMessage("Campo requerido!")
      : setLoginFieldMessage("");

    password === ""
      ? setPasswordFieldMessage("Campo requerido!")
      : setPasswordFieldMessage("");
  }

  const Login = () => {
    let req = {
      url: "http://localhost:3000/users/login",
      method: "PUT",
      data: {
        login: login,
        senha: password,
      },
    };

    HandleErrorMessages(login, password);

    if (login === "" || password === "") {
      setErrorMessage("");
      return;
    }

    axios(req).then((data) => {
      if (data.data.user !== undefined) {
        setErrorMessage("");
        Router.push("/listaUsuarios");
      }
      setErrorMessage(data.data.message);
    });
  };

  return (
    <>
      <Header>
        <div className={styles.loginForm}>
          <div className={styles.loginField}>
            <span>Login: </span>
            <input
              onChange={(e) => {
                setLogin(e.target.value);
              }}
            />
          </div>
          <span className={styles.errorMessage}>{loginFieldMessage}</span>

          <div className={styles.loginForm}>
            <div className={styles.loginField}>
              <span>Senha: </span>
              <input
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                type="password"
              />
            </div>
            <span className={styles.errorMessage}>{passwordFieldMessage}</span>
          </div>
          <button
            className={styles.loginButton}
            onClick={(e) => {
              Login();
            }}
          >
            {" "}
            Login{" "}
          </button>
          <div className={styles.errorMessage}>
            <span>{errorMessage}</span>
          </div>
        </div>
        <div className={(styles.loginForm, styles.resetPassword)}>
          <Link href="/resetSenha" className={styles.forgotPassword}>
            {" "}
            Esqueceu sua Senha?
          </Link>
        </div>
      </Header>
    </>
  );
}
