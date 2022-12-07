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
        {/* placeholder - make this a dynamic Schedule component later */}
        <div className={styles.schedule}>
          <h4>Opening hours this week</h4>
          <div className={styles.locations}>
            <div>
              <h5>Greve</h5>
              <ul>
                <li>Mon-Fri: 10-17</li>
              </ul>
            </div>
            <div>
              <h5>Valby Parken</h5>
              <ul>
                <li>Mon: 10-17</li>
                <li>Wed, Fri: 13-17</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.address}>
          <ul>
            <li>Disc Connection I/S</li>
            <li>Grevevej 20</li>
            <li>2670 Greve</li>
            <li>CVR nr: 29 58 82 01</li>
            <li>
              <a id={styles.email} href="mailto: dc@discconnection.dk">
                dc@discconnection.dk
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
