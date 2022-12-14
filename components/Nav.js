import Link from "next/link";
import SearchBar from "./SearchBar";
import { useSelector } from "react-redux";
import styles from "../styles/Nav.module.scss";
// import { ActiveLink } from 'next-active-link';
import { useRouter } from "next/router";
import BurgerMenu from "./mobileMenu/BurgerMenu";

export default function Nav(props) {
  // use router for active link styling
  const router = useRouter();
  // Selecting cart from global state
  const cart = useSelector((state) => state.cart);

  // Getting the count of items
  const getItemsCount = () => {
    return cart.reduce((accumulator, item) => accumulator + item.quantity, 0);
  };

  console.log(props.products);

  return (
    <nav className={styles.nav}>
      <div className={styles.leftWrapper}>
        <Link href="/">
          <div className={styles.logoContainer} title="Home"></div>
        </Link>
        <ul>
          {/* <li>
            <button type="button" onClick={() => console.log(router.pathname)}>
              Check route
            </button>
          </li> */}
          <li className={router.query.category == "Discs" ? styles.active : ""}>
            <Link href="/productList/Discs">
              <a>Discs</a>
            </Link>
          </li>
          <li className={router.query.category == "Bags" ? styles.active : ""}>
            <Link href="/productList/Bags">
              <a>Bags</a>
            </Link>
          </li>
          <li className={router.query.category == "Accessories" ? styles.active : ""}>
            <Link href="/productList/Accessories">
              <a>Accesories</a>
            </Link>
          </li>
          <li className={router.pathname == "/about" ? styles.active : ""}>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
        </ul>
      </div>

      <div className={styles.rightWrapper}>
        <SearchBar products={props.products} />
        <Link href="/cart">
          <div className={styles.basket}>
            <div className={styles.countContainer}>{getItemsCount()}</div>
          </div>
        </Link>
        <BurgerMenu />
      </div>
    </nav>
  );
}
