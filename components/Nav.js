import Link from "next/link";
import SearchBar from "./searchBar";
import styles from "../styles/Nav.module.scss";

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.leftWrapper}>
        <div className={styles.logoContainer}></div>
        <ul>
          <li>
            <Link href="../pages/productList">
              <a>Discs</a>
            </Link>
          </li>
          <li>
            <Link href="../pages/productList">
              <a>Bags</a>
            </Link>
          </li>
          <li>
            <Link href="/productList">
              <a>Accesories</a>
            </Link>
          </li>
          <li>
            <p>
              <Link href="/about">About</Link>
            </p>
          </li>
        </ul>
      </div>

      <div className={styles.rightWrapper}>
        <SearchBar />
      </div>
    </nav>
  );
}
