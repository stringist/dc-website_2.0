import styles from "../../styles/Product.module.scss";

export default function Score(props) {
  return (
    <div className={styles.score}>
      <p>{props.name}</p>
      <p className={styles.number}>{props.score}</p>
    </div>
  );
}
