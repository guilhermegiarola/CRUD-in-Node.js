import { useEffect, useState } from "react";
import style from "./Filters.module.css";

const Filters = (props) => {
  const [unfilteredList, setUnfilteredList] = useState([]);
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [login, setLogin] = useState("");
  const [faixaEtaria, setFaixaEtaria] = useState({});
  const [periodoNascimento, setPeriodoNascimento] = useState({
    de: new Date(999, 1, 1),
    a: new Date(2999, 1, 1),
  });
  const [periodoInsercao, setPeriodoInsercao] = useState({
    de: new Date(999, 1, 1),
    a: new Date(2999, 1, 1),
  });
  const [periodoAlteracao, setPeriodoAlteracao] = useState({
    de: new Date(999, 1, 1),
    a: new Date(2999, 1, 1),
  });

  const faixasEtarias = [
    {
      value: "Selecione",
      min: -1,
      max: 9999,
    },
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

  // const handleSelect = (element) => {
  //   for (let it of faixasEtarias) {
  //     if (it.value === element) {
  //       setFaixaEtaria((faixaEtaria) => ({
  //         min: it.min,
  //         max: it.max,
  //       }));
  //     }
  //   }
  // };

  // const calcularIdade = (item) => {
  //   if (item !== undefined) {
  //     let currentYear = new Date().getFullYear();
  //     let generatedDate = new Date(item.dataNascimento);
  //     if (generatedDate instanceof Date && !isNaN(generatedDate)) {
  //       return currentYear - generatedDate.getFullYear();
  //     } else {
  //       return faixaEtaria.min - 1;
  //     }
  //   }
  // };

  // const formatarDataNascimento = (item) => {
  //   if (item !== undefined) {
  //     let generatedDate = new Date(item.dataNascimento);
  //     if (generatedDate instanceof Date && !isNaN(generatedDate)) {
  //       return generatedDate;
  //     } else {
  //       return new Date(2999, 1, 1).value;
  //     }
  //   } else {
  //     return new Date(2999, 1, 1).value;
  //   }
  // };

  useEffect(() => {
    if (unfilteredList.length === 0) {
      setUnfilteredList(props.items);
    }

    // if (isNaN(new Date(periodoNascimento.de).getTime())) {
    //   setPeriodoNascimento({
    //     de: new Date(999, 1, 1),
    //     a: periodoNascimento.a,
    //   });
    // }

    // if (isNaN(new Date(periodoNascimento.a).getTime())) {
    //   setPeriodoNascimento({
    //     de: periodoNascimento.de,
    //     a: new Date(2999, 1, 1),
    //   });
    // }

    // if (isNaN(new Date(periodoInsercao.de).getTime())) {
    //   setPeriodoInsercao({
    //     de: new Date(999, 1, 1),
    //     a: periodoInsercao.a,
    //   });
    // }

    // if (isNaN(new Date(periodoInsercao.a).getTime())) {
    //   setPeriodoInsercao({
    //     a: new Date(2999, 1, 1),
    //     de: periodoInsercao.de,
    //   });
    // }

    // if (isNaN(new Date(periodoAlteracao.de).getTime())) {
    //   setPeriodoAlteracao({
    //     de: new Date(999, 1, 1),
    //     a: periodoAlteracao.a,
    //   });
    // }

    // if (isNaN(new Date(periodoAlteracao.a).getTime())) {
    //   setPeriodoAlteracao({
    //     a: new Date(2999, 1, 1),
    //     de: periodoNascimento.de,
    //   });
    // }

    props.setListaUsuarios(
      unfilteredList
        .filter((item) => item.nome.includes(nome))
        .filter((item) => item.cpf.includes(cpf))
        .filter((item) => item.login.includes(login))
      // .filter(
      //   (item) =>
      //     new Date(item.dataNascimento) >= new Date(periodoNascimento.de)
      // )
      // .filter(
      //   (item) =>
      //     new Date(item.dataNascimento) <= new Date(periodoNascimento.a)
      // )
      // .filter(
      //   (item) => new Date(item.dataInclusao) >= new Date(periodoInsercao.de)
      // )
      // .filter(
      //   (item) => new Date(item.dataInclusao) <= new Date(periodoInsercao.a)
      // )
      // .filter(
      //   (item) =>
      //     new Date(item.dataAlteracao) >= new Date(periodoAlteracao.de)
      // )
      // .filter(
      //   (item) => new Date(item.dataAlteracao) <= new Date(periodoAlteracao.a)
      // )
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
            De:{" "}
            <input
              type="date"
              onChange={(e) => {
                setPeriodoNascimento({
                  de: e.target.value,
                  a: periodoNascimento.a,
                });
              }}
            />
          </div>
          <div>
            A:
            <input
              type="date"
              onChange={(e) => {
                setPeriodoNascimento({
                  de: periodoNascimento.de,
                  a: e.target.value,
                });
              }}
            />
          </div>
        </div>
        <div className={style.field}>
          Período de Inserção:
          <div>
            De:{" "}
            <input
              type="date"
              onChange={(e) => {
                setPeriodoInsercao({
                  de: e.target.value,
                  a: periodoInsercao.a,
                });
              }}
            />
          </div>
          <div>
            A:
            <input
              type="date"
              onChange={(e) => {
                setPeriodoInsercao({
                  de: periodoInsercao.de,
                  a: e.target.value,
                });
              }}
            />
          </div>
        </div>
        <div className={style.field}>
          Período de Alteração:
          <div>
            De:{" "}
            <input
              type="date"
              onChange={(e) => {
                setPeriodoAlteracao({
                  de: e.target.value,
                  a: periodoAlteracao.a,
                });
              }}
            />
          </div>
          <div>
            A:
            <input
              type="date"
              onChange={(e) => {
                setPeriodoAlteracao({
                  de: periodoAlteracao.de,
                  a: e.target.value,
                });
              }}
            />
          </div>
        </div>
        <div className={style.field}>
          Faixa Etária:
          <select onChange={(e) => handleSelect(e.target.value)}>
            {faixasEtarias.map((el) => {
              return (
                <option key={el.indexOf} value={el.value}>
                  {el.value}
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
