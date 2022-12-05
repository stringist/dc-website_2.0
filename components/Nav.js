import Link from "next/link";
import SearchBar from "./searchBar";
import styles from "../styles/Nav.module.scss";

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.leftWrapper}>
        <Link href="/">
          <div className={styles.logoContainer}></div>
        </Link>
        <ul>
          <li>
            <Link href="/productList">
              <a>Discs</a>
            </Link>
          </li>
          <li>
            <Link href="/productList">
              <a>Bags</a>
            </Link>
          </li>
          <li>
            <Link href="/productList">
              <a>Accesories</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
        </ul>
      </div>

      <div className={styles.rightWrapper}>
        <SearchBar />
      </div>
    </nav>
  );
}
