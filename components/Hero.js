import Image from "next/image";
// import bg from "https://lumensity.dk/dc/basket_hero_full.png";
import homeBG from "./../public/images/hero_2.png";
import aboutBG from "./../public/images/basket_hero_full.png";

function Hero({ title }) {
  return (
    <>
      <div
        className="heroWrapper"
        style={
          title === "About" ? { backgroundImage: `url(${aboutBG.src})` } : { backgroundImage: `url(${homeBG.src})` }
        }
      >
        <h1>{title}</h1>
      </div>
      <div className="schedule">
        <h2>Opening hours this week:</h2>
      </div>
    </>
  );
}

export default Hero;
