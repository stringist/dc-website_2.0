import Link from "next/link";
import SearchBar from "./searchBar";
import styles from "../styles/nav.module.scss";

export default function Nav() {
  return (
    <nav>
      <div className="left-wrapper">
        {" "}
        <div className="logo-container"></div>
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
            <Link href="../pages/productList">
              <a>Accesories</a>
            </Link>
          </li>
          <li>
            <Link href="../pages/about">
              <a>About</a>
            </Link>
          </li>
        </ul>
      </div>

      <div className="right-wrapper">
        <SearchBar />
      </div>
    </nav>
  );
}
