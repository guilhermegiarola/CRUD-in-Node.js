import { useMemo, useState, useEffect } from "react";
import axios from "axios";
import Router, { useRouter } from "next/router";
import Header from "../../components/Header";
import Field from "../../components/Field";
import styles from "./index.module.css";
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
    ValidarCamposCadastro(validationObject);

    setErrorMessage("");
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
      .then(() => {
        setErrorMessage("");
        Router.push("/listaUsuarios");
      })
      .catch((err) => {
        setErrorMessage(err.response.data.message);
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
          <Field
            title="Login: "
            value={login}
            isValid={validationObject.login}
            onChange={(e) => {
              setLogin(e.target.value);
            }}
          />
          <Field
            title="Senha: "
            value={senha}
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
            value={nome}
            isValid={validationObject.nome}
            type=""
            onChange={(e) => {
              setNome(e.target.value);
            }}
          />
          <Field
            title="e-Mail: "
            value={email}
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
            value={cpf}
            isValid={validationObject.cpf}
            type=""
            onChange={(e) => {
              setCpf(e.target.value);
            }}
          />
          <Field
            title="Telefone: "
            isValid={validationObject.telefone}
            value={telefone}
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
            value={dataNascimento}
            type=""
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
          <Field
            title="Nome da Mãe: "
            isValid={validationObject.nomeMae}
            value={nomeMae}
            type=""
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
