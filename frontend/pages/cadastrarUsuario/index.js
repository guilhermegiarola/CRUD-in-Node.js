import { useState, useMemo } from "react";
import axios from "axios";
import Router from "next/router";
import Header from "../../components/Header";
import styles from "./index.module.css";
import Field from "../../components/Field";
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
  const [validationObject, setValidationObject] = useState({
    login: true,
    senha: true,
    nome: true,
    email: true,
    cpf: true,
    telefone: true,
    dataNascimento: true,
    nomeMae: true,
  });

  const ValidarCamposCadastro = (validationObject) => {
    setValidationObject({
      login: login !== "",
      senha: senha !== "",
      nome: nome !== "",
      email: email !== "",
      cpf: cpf !== "",
      telefone: telefone !== "",
      dataNascimento: dataNascimento !== "",
      nomeMae: nomeMae !== "",
    });
  };

  useMemo(() => {
    console.log(validationObject);
  }, [validationObject]);

  const CadastrarUsuario = () => {
    ValidarCamposCadastro(validationObject);

    if (Object.values(validationObject).filter((e) => e !== true).length > 0) {
      setErrorMessage("Existem campos faltantes.");
      return;
    } else {
      setErrorMessage("");
    }

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

    if (errorMessage === "") {
      axios(req)
        .then((data) => {
          setErrorMessage("");
          Router.push("/listaUsuarios");
        })
        .catch((err) => {
          setErrorMessage(err.response.data.message);
          return;
        });
    }
  };

  return (
    <>
      <Header>
        <div className={styles.Title}>Cadastrar Usuário</div>
      </Header>
      <div className={styles.Form}>
        <div className={styles.FormField}>
          <Field
            title="Login: "
            isValid={validationObject.login}
            onChange={(e) => {
              setLogin(e.target.value);
            }}
          />
          <Field
            title="Senha: "
            isValid={validationObject.senha}
            type="password"
            onChange={(e) => {
              setSenha(e.target.value);
            }}
          />
        </div>
        <div className={styles.FormField}>
          <Field
            title="Nome: "
            isValid={validationObject.nome}
            type=""
            onChange={(e) => {
              setNome(e.target.value);
            }}
          />
          <Field
            title="e-Mail: "
            isValid={validationObject.email}
            type=""
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className={styles.FormField}>
          <Field
            title="CPF: "
            isValid={validationObject.cpf}
            type=""
            onChange={(e) => {
              setCpf(e.target.value);
            }}
          />
          <Field
            title="Telefone: "
            isValid={validationObject.telefone}
            type=""
            onChange={(e) => {
              setTelefone(e.target.value);
            }}
          />
        </div>
        <div className={styles.FormField}>
          <Field
            title="Data de Nascimento: "
            isValid={validationObject.dataNascimento}
            type=""
            onChange={(e) => {
              setDataNascimento(e.target.value);
            }}
          />
        </div>
        <div className={styles.FormField}>
          <Field
            title="Nome da Mãe: "
            isValid={validationObject.nomeMae}
            type=""
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
