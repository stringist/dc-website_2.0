import { useState } from "react";
import Link from "next/link";
import Styles from "../../styles/MobileNav.module.scss";

export default function BurgerMenu(props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isOpening, setIsOpening] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleToggle = () => {
    menuOpen ? setIsOpening(true) : setIsClosing(true);
    setMenuOpen((prev) => !prev);
  };
  const closeMenu = () => {
    // console.log("close menu");
    setMenuOpen(false);
  };
  return (
    <nav className={Styles.navBar}>
      <button onClick={handleToggle}>
        {menuOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
            <path d="M12.45 37.65 10.35 35.55 21.9 24 10.35 12.45 12.45 10.35 24 21.9 35.55 10.35 37.65 12.45 26.1 24 37.65 35.55 35.55 37.65 24 26.1Z" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
            <path d="M6 36V33H42V36ZM6 25.5V22.5H42V25.5ZM6 15V12H42V15Z" />
          </svg>
        )}
      </button>
      <ul className={`${Styles.menuNav} ${menuOpen ? Styles.showMenu : null} ${isOpening ? Styles.showingMenu : null} ${isClosing ? Styles.closingMenu : null}`}>
        <li onClick={() => closeMenu()}>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li onClick={() => closeMenu()}>
          <Link href="/productList/Discs">
            <a>Discs</a>
          </Link>
        </li>
        <li onClick={() => closeMenu()}>
          <Link href="/productList/Bags">
            <a>Bags</a>
          </Link>
        </li>
        <li onClick={() => closeMenu()}>
          <Link href="/productList/Accessories">
            <a>Accessories</a>
          </Link>
        </li>
        <li onClick={() => closeMenu()}>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
