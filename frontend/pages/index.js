import axios from "axios";
import styles from "./index.module.css";
import { useState } from "react";
import Router from "next/router";
import Link from "next/link";

export default function Login() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const Login = () => {
    let req = {
      url: "http://localhost:3000/users/login",
      method: "PUT",
      data: {
        login: login,
        senha: password,
      },
    };
    axios(req).then((data) => {
      if (data.data.user !== undefined) {
        setErrorMessage("");
        Router.push("/listaUsuarios");
      }
      setErrorMessage(data.data.message);
    });
  };

  return (
    <div className={styles.loginFields}>
      <div>
        <div className={styles.loginField}>
          <span>Login: </span>
          <input
            onChange={(e) => {
              setLogin(e.target.value);
            }}
          />
        </div>
        <div className={styles.loginField}>
          <span>Senha: </span>
          <input
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
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
        <Link href="/resetSenha"> Esqueceu sua Senha?</Link>
        <div>
          <span>{errorMessage}</span>
        </div>
      </div>
    </div>
  );
}
