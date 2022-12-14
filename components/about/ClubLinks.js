import Link from "next/link";
import styles from "../../styles/About.module.scss";
export default function ClubLinks() {
  return (
    <>
      <section className={styles.clubLinks_Wrapper}>
        <ul className={styles.section1_clubLinks}>
          <li>
            <a rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/groups/kfkdiscgolf">
              KFK Disc Golf
            </a>
          </li>
          <li>
            <a rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/groups/4736477413134157">
              Tune IF Disc Golf
            </a>
          </li>
          <li>
            <a rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/groups/1994859693977329">
              Ejby IF Disc Golf
            </a>
          </li>
          <li>
            <a rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/groups/storebaelt.discgolf">
              Eggeslevmagle Disc Golf
            </a>
          </li>
        </ul>
        <ul className={styles.section2_clubLinks}>
          <li>
            <a rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/groups/1024655904253100">
              Helsingør Disc Golf Venner
            </a>
          </li>
          <li>
            <a rel="noopener noreferrer" target="_blank" href="https://www.ndgk.dk/">
              Næstved Disc Golf Klub
            </a>
          </li>
          <li>
            <a rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/MDK2630/">
              Mølleparken Disc Golf
            </a>
          </li>
        </ul>
      </section>
    </>
  );
}
