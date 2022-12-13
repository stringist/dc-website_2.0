import Styles from "../styles/Search.module.scss";
import { useRef, useState, useEffect } from "react";

export default function SearchOverlay(props) {
  const [searched, setSearched] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const options = { method: "GET", url: "https://cocktails-240e.restdb.io/rest/disc-connection", headers: { "cache-control": "no-cache", "x-apikey": "a7a3d1237d76a4c6bd5943e4230d2b86f526e" } };

    fetch(options)
      .then((res) => res.json())
      .then((data) => {
        setProducts({ data: data });
      });
  }, []);

  const searchGroup = useRef();

  console.log("overlay opened");
  console.log(products);

  function toggleOverlay() {
    props.overlayIsOpened ? props.setIsOpening(true) : props.setIsClosing(true);
    props.setOverlayIsOpened((prev) => !prev);
  }

  function searchProducts(e) {
    const input = e.target.value.toLowerCase();
    const searchedProducts = products.filter((product) => {
      return product.name.toLowerCase().includes(input);
    });
    setSearched(searchedProducts);
  }

  return (
    <div className={Styles.overlay}>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" onClick={toggleOverlay} className={`bi bi-x ${Styles.closeButton}`}>
        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
      </svg>

      <label htmlFor="">Search</label>
      <div className={Styles.search__input}>
        <input type="text" id="searchBar" ref={searchGroup} onChange={searchProducts} />
      </div>
    </div>
  );
}
