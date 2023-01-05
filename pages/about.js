import AboutProfile from "../components/about/AboutProfile";
import Head from "next/head";
import soeren from "../public/images/soeren.png";
import sinus from "../public/images/sinus.png";
import ClubLinks from "../components/about/ClubLinks";
import FindUs from "../components/about/FindUs";
import Hero from "../components/Hero";
import GetInTouch from "../components/about/GetInTouch";
import styles from "../styles/About.module.scss";
export default function About() {
  return (
    <>
      <Head>
        <title>About - Disc Connection</title>
        <meta name="description" content="About Disc Connection" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Hero title="About" />
      </header>

      <main className={styles.margin}>
        <section>
          <AboutProfile
            image={soeren}
            text={
              `Disc Connection is a 2-man stakeholder company whose primary purpose
              is to spread the sport of disc golf in Denmark via sale of discs and
              equipment for disc golf. We started together in the spring of 2006,
              and are the most versatile importer and dealer of golf discs and
              equipment for disc golf, and have a very large inventory and wide
              selection of quality products, as well as Denmark's best prices -
              regardless of whether you shop online, in our Proshop in Tune, or in
              our partner stores in Roskilde, at RUC, in Viby, or at Østerbro.`
            }
            name={"Søren"}
            className={styles.profile}
          />

          <AboutProfile
            image={sinus}
            name={"Sinus"}
            text={
              `We give a 10% online discount (and physically in the Proshop in Tune); on non-discounted discs and equipment with a price between DKK 60 and DKK 2,000 - to members of KFK Disc Golf, Tune IF Disc Golf, Ejby IF Disc Golf, Eggeslevmagle Discgolf, Helsingør Disc Golf Friends, Næstved Disc Golf Klub and MDK (Mølleparken DiscGolf Club), and it can therefore very easily become a good investment to join one of these clubs. Read more about the clubs on their respective Facebook pages:`
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
