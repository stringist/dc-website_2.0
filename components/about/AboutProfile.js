import Image from "next/image";
import styles from "../../styles/About.module.scss";
export default function AboutProfile({ ...props }) {
  return (
    <section className={props.name === "Søren" ? styles.profile : styles.profile_reverse}>
      <div>
        <Image src={props.image} alt="/" object-fit="fill" />
        <p>{props.name}</p>
      </div>
      <p className={props.name === "Søren" ? styles.soeren_p : styles.sinus_p}>{props.text}</p>
    </section>
  );
}
{
  /* <ul className={`
${menuStyles.menuNav} 
${menuOpen ? menuStyles.showMenu : null} 
${isOpening ? menuStyles.showingMenu : null} 
${isClosing ? menuStyles.closingMenu : null}`}>

</ul> */
}
