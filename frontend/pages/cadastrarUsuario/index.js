import { useState } from "react";
import axios from "axios";
import Router from "next/router";
import Form from "../../components/Form";
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

    axios(req).then((data) => {
      console.log(data);
      Router.push("/listaUsuarios");
    });
  };

  return (
    <Form>
      <h3>Cadastrar Usuario</h3>
      <Field>
        <div>
          <span> Login: </span>
          <input
            onChange={(e) => {
              setLogin(e.target.value);
            }}
          />
          <span> Senha: </span>
          <input
            type="password"
            onChange={(e) => {
              setSenha(e.target.value);
            }}
          />
        </div>
      </Field>
      <Field>
        <span> Nome </span>
        <input
          onChange={(e) => {
            setNome(e.target.value);
          }}
        />
        <span>e-Mail: </span>
        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </Field>
      <Field>
        <span>CPF: </span>
        <input
          onChange={(e) => {
            setCpf(e.target.value);
          }}
        />
        <span> Tel.: </span>
        <input
          onChange={(e) => {
            setTelefone(e.target.value);
          }}
        />
      </Field>
      <Field>
        <span>Data de Nascimento: </span>
        <input
          onChange={(e) => {
            setDataNascimento(e.target.value);
          }}
        />
      </Field>
      <Field>
        <span>Nome da Mãe: </span>
        <input
          onChange={(e) => {
            setNomeMae(e.target.value);
          }}
        />
      </Field>
      <button
        onClick={(e) => {
          CadastrarUsuario();
        }}
      >
        Cadastrar Usuário
      </button>
      <button
        onClick={(e) => {
          Router.push("/listaUsuarios");
        }}
      >
        Voltar para a Lista de Usuários
      </button>

      <div>
        <span>
          <b>{errorMessage}</b>
        </span>
      </div>
    </Form>
  );
}
