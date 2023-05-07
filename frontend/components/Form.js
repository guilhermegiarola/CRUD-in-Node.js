import styles from "./Form.module.css";

const Form = (props) => {
  return <div className={styles.form}>{props.children}</div>;
};

export default Form;
