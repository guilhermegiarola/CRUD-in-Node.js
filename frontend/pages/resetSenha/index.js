import { useState } from "react";
import axios from "axios";
import Router from "next/router";
import Form from "../../components/Form";

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
        setErrorMessage("A sua senha é " + data.data.senha);
      } else {
				setErrorMessage(data.data.message);
			}
    });
	}

  return (
    <Form>
      <h3>Esqueceu sua Senha?</h3>
      <span>Insira os dados abaixo para recuperação da sua senha.</span>
      <div>
        <span>Login: </span>
        <input
          onChange={(e) => {
            setLogin(e.target.value);
          }}
        />
      </div>
      <div>
        <span>CPF: </span>
        <input
          onChange={(e) => {
            setCpf(e.target.value);
          }}
        />
      </div>
      <div>
        <span>E-mail: </span>
        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>
			<button onClick={(e) => {
				RecuperarSenha();
			}}>
				Recuperar Senha
			</button>	
			<button onClick={(e) => {
            Router.push("/");
			}}>
				Voltar para a Tela de Login
			</button>	

			<div>
				<span><b>{errorMessage}</b></span>
			</div>
			
    </Form>
  );
}
