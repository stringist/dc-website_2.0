import Link from "next/link";
import SearchBar from "./SearchBar";
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
