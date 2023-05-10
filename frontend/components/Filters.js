import { useEffect, useState } from "react";
import style from "./Filters.module.css";

const Filters = (props) => {
  const [unfilteredList, setUnfilteredList] = useState([]);
  const [inactiveList, setInactiveList] = useState([]);
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [login, setLogin] = useState("");
  const faixasEtarias = [
    {
      value: "18-26 anos",
      min: 18,
      max: 26,
    },
    {
      value: "25-31 anos",
      min: 25,
      max: 31,
    },
    {
      value: "35-41 anos",
      min: 35,
      max: 41,
    },
    {
      value: "> 40 anos",
      min: 40,
      max: 9999,
    },
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
          <div>
            De: <input />
          </div>
          <div>
            A: <input />
          </div>
        </div>
        <div className={style.field}>
          Período de Inserção:
          <div>
            De: <input />
          </div>
          <div>
            A: <input />
          </div>
        </div>
        <div className={style.field}>
          Período de Alteração:
          <div>
            De: <input />
          </div>
          <div>
            A: <input />
          </div>
        </div>
        <div className={style.field}>
          Faixa Etária:
          <select>
            {faixasEtarias.map((el) => {
              return (
                <option key={el.indexOf} value={el}>
                  {el}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    </>
  );
};

export default Filters;
