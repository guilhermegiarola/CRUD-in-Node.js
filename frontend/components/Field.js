import styles from "./Field.module.css";

const Field = (props) => {
  return (
    <>
      <div className={styles.div}>
        <span className={styles.Span}>{props.title}</span>
        <input
          value={props.value}
          className={props.isValid ? "" : styles.invalidInput}
          type={props.type}
          onChange={props.onChange}
        />
      </div>
    </>
  );
};

export default Field;
