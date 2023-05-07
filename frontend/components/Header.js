import style from "./Header.module.css";

const Header = (props) => {
  return <div className={style.Header}>{props.children}</div>;
};

export default Header;
