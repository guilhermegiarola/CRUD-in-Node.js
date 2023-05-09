import { useEffect, useState } from "react";
import style from "./Filters.module.css";

const Filters = (props) => {
  const [unfilteredList, setUnfilteredList] = useState([]);
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [login, setLogin] = useState("");
  const faixasEtarias = [
    "18-26 anos",
    "25-31 anos",
    "30-36 anos",
    "35-41 anos",
    " > 40 anos",
  ];

  useEffect(() => {
    //Setting the original list to the unfiltered list.
    if (unfilteredList.length === 0) {
      setUnfilteredList(props.items);
    }
    props.setListaUsuarios(
      unfilteredList
        .filter((item) => item.nome.includes(nome))
        .filter((item) => item.cpf.includes(cpf))
        .filter((item) => item.login.includes(login))
    );
  }, [nome, cpf, login]);

  return (
    <>
      <div className={style.generalFilters}>
        <div className={style.title}>Lista de Filtros</div>
        <div className={style.checkbox}>
          <input
            type="checkbox"
            onClick={(e) => {
              const { checked } = e.target;
              props.setListarInativos(!checked);
            }}
          />
          Listar Inativos
        </div>
        <div
          className={style.field}
          onChange={(e) => {
            setNome(e.target.value);
          }}
        >
          Contém no Nome:
          <input />
        </div>
        <div
          className={style.field}
          onChange={(e) => {
            setCpf(e.target.value);
          }}
        >
          Filtrar por CPF:
          <input />
        </div>
        <div
          className={style.field}
          onChange={(e) => {
            setLogin(e.target.value);
          }}
        >
          Filtrar por Login:
          <input />
        </div>
        <div className={style.field}>
          Período de Nascimento:
          <input />
        </div>
        <div className={style.field}>
          Período de Inserção:
          <input />
        </div>
        <div className={style.field}>
          Período de Alteração:
          <input />
        </div>
        <div className={style.field}>
          Faixa Etária:
          <input />
        </div>
      </div>
    </>
  );
};

export default Filters;
