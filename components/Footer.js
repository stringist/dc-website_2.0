import Link from "next/link";
import styles from "../styles/Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.soMe}>
          <a href="https://www.facebook.com/discconnection.dk">
            <div class={styles.fb} />
          </a>
          <a href="https://www.instagram.com/disc_connection_dk/">
            <div class={styles.ig} />
          </a>
          <a href="#">
            <div class={styles.yt} />
          </a>
        </div>
        <div className={styles.payment}></div>
        <div className={styles.schedule}></div>
      </div>
    </footer>
  );
}
