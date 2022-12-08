import Link from "next/link";
import FakeProductTile from "./FakeProductTile";
import styles from "../../styles/Home.module.scss";

export default function Featured() {
  return (
    <section className={styles.featured}>
      <h2>Featured</h2>
      <div className={styles.carousel}>
        <FakeProductTile />
        <FakeProductTile />
        <FakeProductTile />
        <FakeProductTile />
      </div>
      <Link href="/productList/Discs">
        <a className="arrow">View all discs </a>
      </Link>
    </section>
  );
}
