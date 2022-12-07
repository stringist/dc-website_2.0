import Link from "next/link";
import styles from "../../styles/About.module.scss";
export default function ClubLinks() {
  return (
    <>
      <div className={styles.clubLinks_Wrapper}>
        <div className={styles.section1_clubLinks}>
          <Link href="https://www.facebook.com/groups/kfkdiscgolf">
            - KFK Discgolf
          </Link>
          <Link href="https://www.facebook.com/groups/4736477413134157">
            - Tune IF Disc Golf
          </Link>
          <Link href="https://www.facebook.com/groups/1994859693977329">
            - Ejby IF Disc Golf
          </Link>
          <Link href="https://www.facebook.com/groups/storebaelt.discgolf">
            - Eggeslevmagle Discgolf
          </Link>
        </div>
        <div className={styles.section2_clubLinks}>
          <Link href="https://www.facebook.com/groups/1024655904253100">
            - Helsingør Disc Golf Venner
          </Link>
          <Link href="https://www.ndgk.dk/">- Næstved Disc Golf Klub</Link>
          <Link href="https://www.facebook.com/MDK2630/">
            - Mølleparken Discgolf
          </Link>
        </div>
      </div>
    </>
  );
}
