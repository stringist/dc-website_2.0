import AboutProfile from "../components/about/AboutProfile";
import Head from "next/head";
import soeren from "../public/images/soeren.png";
import sinus from "../public/images/sinus.png";
import ClubLinks from "../components/about/ClubLinks";
import FindUs from "../components/about/Findus";
import Hero from "../components/hero";
import GetInTouch from "../components/about/GetInTouch";
import styles from "../styles/About.module.scss";
export default function About() {
  return (
    <>
      <header>
        <Hero title="About" />
      </header>

      <main className={styles.margin}>
        <section>
          <AboutProfile
            image={soeren}
            text={
              "Disc Connection er en 2-mands interessentvirksomhed hvis primære formål er at udbrede disc golf-sporten i Danmark via salg af discs og udstyr til disc golf. Vi er startet sammen i foråret 2006 og er den mest alsidige importør og forhandler af golfdiscs og udstyr til disc golf, og har et meget stort og bredt udvalg af kvalitetsprodukter, samt Danmarks bedste priser - uanset om du handler online, i vores Proshop i Tune, eller i vores partnerbutikker i Roskilde, på RUC, i Viby eller på Østerbro."
            }
            name={"Søren"}
            className={styles.profile}
          />

          <AboutProfile
            image={sinus}
            name={"Sinus"}
            text={
              "Vi giver 10% online-rabat (og fysisk i Proshoppen i Tune) på ikke-nedsatte discs og udstyr med en pris på mellem 60 kr. og 2.000 kr. - til medlemmer af KFK Disc Golf, Tune IF Disc Golf, Ejby IF Disc Golf, Eggeslevmagle Discgolf, Helsingør Disc Golf Venner, Næstved Disc Golf Klub og MDK (Mølleparken DiscGolf Klub) , og det kan derfor meget nemt blive en god investering at melde sig ind i en af disse klubber. Læs mere om klubberne på deres respektive Facebook-sider:"
            }
          />
          <ClubLinks />
        </section>
        <FindUs />
        <GetInTouch />
      </main>
    </>
  );
}
