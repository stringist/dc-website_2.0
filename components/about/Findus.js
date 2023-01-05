import GoogleMaps from "./GoogleMaps";
import styles from "../../styles/About.module.scss";
export default function FindUs() {
  return (
    <section className={styles.find_us}>
      <h2>Find Us</h2>
      <p>
        We are generally present with our &quot;mobile shop&quot; in Valbyparken
        3-4 days a week, including most weekends &#40;when we are not out for
        tournaments&#41;. In addition, we are almost always representing with
        the shop for tournaments on Zealand. Besides that, you are welcome to
        visit our Proshop on the Greve course next to Tune Kursuscenter, where
        you can see our entire stock.
      </p>
      <section className={styles.map_wrapper}>
        <GoogleMaps
          title={"Pro Shoppen"}
          address={"Grevevej 20, 2670 Greve"}
          hoursMonFri={"Mon-Fri: 10-17"}
          lat={55.59803972765034}
          lng={12.217857857672051}
        />

        <GoogleMaps
          title={"Mobile butikken - Valbyparken"}
          address={"Hammelstrupvej 98, 2450 København"}
          hoursMonFri={"Mon-Fri: 10-17"}
          hoursWedFri={"Wed & Fri: 13-17"}
          lat={55.64118851317173}
          lng={12.519380018285755}
        />
      </section>
    </section>
  ); /* 55.64118851317173, 12.519380018285755 */
}
