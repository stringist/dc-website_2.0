import Link from "next/link";
import SearchBar from "./SearchBar";
import { useSelector } from "react-redux";
import styles from "../styles/Nav.module.scss";

export default function Nav() {
  // Selecting cart from global state
  const cart = useSelector((state) => state.cart);

  // Getting the count of items
  const getItemsCount = () => {
    return cart.reduce((accumulator, item) => accumulator + item.quantity, 0);
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.leftWrapper}>
        <Link href="/">
          <div className={styles.logoContainer}></div>
        </Link>
        <ul>
          <li>
            <Link href="/productList/Discs">
              <a>Discs</a>
            </Link>
          </li>
          <li>
            <Link href="/productList/Bags">
              <a>Bags</a>
            </Link>
          </li>
          <li>
            <Link href="/productList/Accessories">
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
        <Link href="/cart">
          <p>Cart ({getItemsCount()})</p>
        </Link>
      </div>
    </nav>
  );
}
