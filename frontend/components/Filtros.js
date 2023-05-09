const Filtros = (props) => {
  return (
    <>
      <input
        type="checkbox"
        onClick={(e) => {
          const { checked } = e.target;
          props.setListarInativos(!checked);
        }}
      />
      Listar Inativos
    </>
  );
};

export default Filtros;
