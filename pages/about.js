import AboutProfile from "../components/aboutProfile";
import soeren from "../public/images/soeren.png";

export default function About() {
  return (
    <>
      <AboutProfile
        image={soeren}
        text={
          "Disc Connection er en 2-mands interessentvirksomhed hvis primære formål er at udbrede disc golf-sporten i Danmark via salg af discs og udstyr til disc golf. Vi er startet sammen i foråret 2006 og er den mest alsidige importør og forhandler af golfdiscs og udstyr til disc golf, og har et meget stort og bredt udvalg af kvalitetsprodukter, samt Danmarks bedste priser - uanset om du handler online, i vores Proshop i Tune, eller i vores partnerbutikker i Roskilde, på RUC, i Viby eller på Østerbro."
        }
      />
    </>
  );
}
