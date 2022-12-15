import BurgerMenu from "./BurgerMenu";
import Link from "next/link";
import { useSelector } from "react-redux";
import MobileSearch from "../MobileSearch";

import styles from "../../styles/Nav.module.scss";
import Styles from "../../styles/MobileNav.module.scss";

export default function MobileNav() {
  const cart = useSelector((state) => state.cart);

  // Getting the count of items
  const getItemsCount = () => {
    return cart.reduce((accumulator, item) => accumulator + item.quantity, 0);
  };
  return (
    <div className={Styles.mobileNav} id="mobileNav">
      <BurgerMenu />
      <MobileSearch />

      <Link href="/cart">
        <div className={styles.basket}>
          {getItemsCount() > 0 ? <div className={styles.countContainer}>{getItemsCount()}</div> : ""}
        </div>
      </Link>
    </div>
  );
}
