import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Home.module.scss";
export default function ShopCategory() {
  return (
    <section id="category">
      <h2>Shop By Category</h2>
      <div className={styles.categoryGroup}>
        <Link href="/productList/Discs">
          <a className={styles.categoryCard}>
            <div className={`${styles.catImage} ${styles.discImage}`}></div>
            Discs
          </a>
        </Link>

        <Link href="/productList/Bags">
          <a className={styles.categoryCard}>
            <div className={`${styles.catImage} ${styles.bagImage}`}></div>
            Bags
          </a>
        </Link>

        <Link href="/productList/Accessories">
          <a className={styles.categoryCard}>
            <div className={`${styles.catImage} ${styles.accImage}`}></div>
            Accessories
          </a>
        </Link>
      </div>
    </section>
  );
}
