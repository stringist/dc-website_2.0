import GetInTouchProfile from "./GetInTouchProfile";
import styles from "../../styles/About.module.scss";
export default function GetInTouch() {
  return (
    <section className={styles.getInTouch}>
      <h2>Get in touch</h2>
      <article className={styles.get_in_touch__profiles_wrapper}>
        <GetInTouchProfile
          name={"Søren Ivø"}
          position={"Salgsansvarlig, lageransvarlig"}
          email={"si@discconnection.dk"}
          telefon={93992274}
        />
        <GetInTouchProfile
          name={"Sinus Frank"}
          position={"Website, økonomi, administration"}
          email={"sf@discconnection.dk "}
          telefon={93992274}
        />
      </article>
    </section>
  );
}
