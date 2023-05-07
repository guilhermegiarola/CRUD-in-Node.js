import styles from "./Field.module.css";

const Field = (props) => {
  return <div className={styles.field}>{props.children}</div>;
};

export default Field;
