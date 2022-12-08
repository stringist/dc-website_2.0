import Link from "next/link";
import styles from "../../styles/Home.module.scss";
export default function HomeAbout() {
  return (
    <section className={styles.about}>
      <article>
        <h2>About</h2>
        <p>
          Disc Connection er en 2-mands interessentvirksomhed hvis primære formål er at udbrede disc golf-sporten i
          Danmark via salg af discs og udstyr til disc golf. Vi er startet sammen i foråret 2006 og er den mest alsidige
          importør og forhandler af golfdiscs og udstyr til disc golf, og har et meget stort og bredt udvalg af
          kvalitetsprodukter, samt Danmarks bedste priser - uanset om du handler online, i vores Proshop i Tune, eller i
          vores partnerbutikker i Roskilde, på RUC, i Viby eller på Østerbro.
        </p>
        <p>
          Vi er som udgangspunkt til stede med vores &quot;mobile butik&quot; i Valbyparken 3-4 dage om ugen, herunder
          de fleste weekender (når vi ikke er ude til turneringer). Vi er derudover næsten altid repræsenteret med
          butikken til turneringer på Sjælland. Derudover kan vores Proshop på Greve-banen ved Tune Kursuscenter
          besøges, hvor du kan se hele vores lager. Se ugens åbningstider her.
        </p>
        <Link href="/about">
          <button className="primary-button">
            Read More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1rem"
              height="1rem"
              fill="currentColor"
              class="bi bi-arrow-right-short"
              viewBox="0 0 12 12"
            >
              <path
                fill-rule="evenodd"
                d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
              />
            </svg>
          </button>
        </Link>
      </article>
    </section>
  );
}
