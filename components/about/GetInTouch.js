import GetInTouchProfile from "./GetInTouchProfile";
export default function GetInTouch() {
  return (
    <div>
      <h2>Get in touch</h2>
      <GetInTouchProfile
        name={"Søren Ivø"}
        position={"Salgsansvarlig, lageransvarlig"}
        email={"si@discconnection.dk"}
        telefon={"93 99 22 74"}
      />
      <GetInTouchProfile
        name={"Sinus Frank"}
        position={"Website, økonomi, administration"}
        email={"sf@discconnection.dk "}
        telefon={" 93 99 22 74"}
      />
    </div>
  );
}
