import Image from "next/image";
// import bg from "https://lumensity.dk/dc/basket_hero_full.png";
import homeBG from "./../public/images/hero_vintage.png";
// import homeBG from "./../public/images/hero_2.png";
import aboutBG from "./../public/images/basket_hero_full.png";

function Hero({ title }) {
  return (
    <>
      <div
        className="heroWrapper"
        style={
          title === "About"
            ? { backgroundImage: `url(${aboutBG.src})`, backgroundPositionY: "bottom 30%" }
            : { backgroundImage: `url(${homeBG.src})`, backgroundPositionY: "top" }
        }
      >
        <h1>{title}</h1>
      </div>
      <div className="scheduleCard">
        <div className="schedule">
          <h4>Opening hours this week</h4>
          <div className="locations">
            <div>
              <h5>Greve</h5>
              <ul>
                <li>Mon-Fri: 10-17</li>
              </ul>
            </div>
            <div>
              <h5>Valby Parken</h5>
              <ul>
                <li>Mon: 10-17</li>
                <li>Wed, Fri: 13-17</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
