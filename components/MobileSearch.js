import { React, useState } from "react";
import MobileSearchOverlay from "./MobileSearchOverlay";
import Styles from "../styles/MobileSearch.module.scss";
import Link from "next/link";

export default function MobileSearch(props) {
  const [overlayIsOpened, setOverlayIsOpened] = useState(false);
  const [isOpening, setIsOpening] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  function toggleOverlay() {
    overlayIsOpened ? setIsOpening(true) : setIsClosing(true);
    setOverlayIsOpened((prev) => !prev);
  }

  return (
    // this is placeholder
    <>
      <Link href="/search">
        <div className={Styles.searchIcon}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            // class="bi bi-search"
            viewBox="0 0 16 16"
            onClick={toggleOverlay}
            id={Styles.icon}
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </div>
      </Link>
      {/* {overlayIsOpened ? <></> : null}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        // class="bi bi-search"
        viewBox="0 0 16 16"
        onClick={toggleOverlay}
      >
        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
      </svg> */}

      {/* {overlayIsOpened ? <MobileSearchOverlay setOverlayIsOpened={setOverlayIsOpened} isOpening={isOpening} setIsOpening={setIsOpening} isClosing={isClosing} setIsClosing={setIsClosing} products={props.products} /> : null} */}
    </>
  );
}
