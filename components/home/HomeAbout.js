import Link from "next/Link";
export default function HomeAbout() {
  return (
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
        Vi er som udgangspunkt til stede med vores &quot;mobile butik&quot; i Valbyparken 3-4 dage om ugen, herunder de
        fleste weekender &lpar;når vi ikke er ude til turneringer&rpar;. Vi er derudover næsten altid repræsenteret med
        butikken til turneringer på Sjælland. Derudover kan vores Proshop på Greve-banen ved Tune Kursuscenter besøges,
        hvor du kan se hele vores lager. Se ugens åbningstider her.
      </p>
      <Link href="/about">
        <button className="primary-button">Read More</button>
      </Link>
    </article>
  );
}
