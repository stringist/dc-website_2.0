import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Home.module.scss";
export default function ShopCategory() {
  return (
    <section id="category">
      <h2>Shop By Category</h2>
      <div className={styles.categoryGroup}>
        <div className={styles.categoryCard}>
          <Image src="/../public/images/placeholder_disc.png" alt="Discs" width={200} height={200}></Image>
          <Link href="/productList/Discs">
            <a>Discs</a>
          </Link>
        </div>
        <div className={styles.categoryCard}>
          <Image src="/../public/images/backpack.png" alt="Bags" width={200} height={200}></Image>
          <Link href="/productList/Bags">
            <a>Bags</a>
          </Link>
        </div>
        <div className={styles.categoryCard}>
          <Image src="/../public/images/placeholder_hat.png" alt="Accessories" width={200} height={200}></Image>
          <Link href="/productList/Accessories">
            <a>Accessories</a>
          </Link>
        </div>
      </div>
    </section>
  );
}
