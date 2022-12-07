import Image from "next/image";
import styles from "../../styles/About.module.scss";
export default function AboutProfile({ ...props }) {
  console.log(props.name);
  return (
    <section
      style={
        props.name === "soeren"
          ? { flexDirection: "row" }
          : { flexDirection: "row-reverse" }
      }
      className={styles.profile}
    >
      <div>
        <Image src={props.image} alt="black haired person" object-fit="fill" />
      </div>
      <p className={props.name === "soeren" ? styles.soeren_p : styles.sinus_p}>
        {props.text}
      </p>
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
