import Link from "next/link";
import SearchBar from "./SearchBar";
import { useSelector } from "react-redux";
import styles from "../styles/Nav.module.scss";
// import { ActiveLink } from 'next-active-link';
import { useRouter } from "next/router";


export default function Nav() {
  // use router for active link styling
  const router = useRouter();
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
          <li><button type="button" onClick={() => console.log(router.query.category)}>Check route</button></li>
          <li className={router.query.category == "Discs" ? styles.active : ""}>
            <Link href="/productList/Discs"><a onClick={() => router.push('/productList/Discs')}>Discs</a></Link>
            {/* <ActiveLink href="/productList/Discs" activeClassName={styles.active}  onActiveChange={(isActive) => console.log(isActive)} activeMatchOptions={{
        exact: true
      }}>
              <a>Discs</a>
            </ActiveLink> */}
          </li>
          <li className={router.pathname == "/productList/[category]" ? styles.active : "notactive"}>
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
          <div className={styles.basket}>
            <div className={styles.countContainer}>{getItemsCount()}</div>
          </div>
        </Link>
      </div>
    </nav>
  );
}
