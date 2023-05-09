import styles from "./Field.module.css";

const Field = (props) => {
  return (
    <>
      <span className={styles.Span}>{props.title}</span>
      <input
        className={props.isValid ? "" : styles.invalidInput}
        type={props.type}
        onChange={props.onChange}
      />
    </>
  );
};

export default Field;
