import Styles from "../styles/Search.module.scss";
import { useRef, useState, useEffect } from "react";
import ProductTile from "./product-tile/ProductTile";
import PaginationButtons from "./PaginationButtons";
export default function SearchOverlay(props) {
  const [searched, setSearched] = useState("");
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [noProductsFound, setNoProductsFound] = useState(false);

  const url = "https://cocktails-240e.restdb.io/rest/disc-connection";
  const options = {
    headers: {
      "x-apikey": "613731bc43cedb6d1f97edad",
    },
  };

  useEffect(() => {
    fetch(url, options)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  const searchGroup = useRef();

  const featured = products.filter((product) => {
    return product.featured === true;
  });

  function toggleOverlay() {
    props.overlayIsOpened ? props.setIsOpening(true) : props.setIsClosing(true);
    props.setOverlayIsOpened((prev) => !prev);
  }

  function searchProducts(e) {
    const input = e.target.value.toLowerCase();
    const searchedProducts = products.filter((product) => {
      return product.name.toLowerCase().includes(input) || product.brand.toLowerCase().includes(input);
    });
    console.log("searched", searchedProducts);
    searchedProducts.length === 0 ? setNoProductsFound(true) : setNoProductsFound(false);

    input === "" ? setSearched([]) : setSearched(searchedProducts);
    console.log(input);
  }

  const [page, setPage] = useState(0);
  const [nPages, setNPages] = useState(0);
  const [pageButtons, setPageButtons] = useState([]);

  const pPerPage = 16;

  useEffect(() => {
    setNPages(Math.ceil(searched.length / pPerPage));
  }, [searched.length]);

  const buttonss = [...Array(nPages)].map((e, i) =>
    page === i ? (
      <button key={i + 1} onClick={() => handleClick(i)} className={Styles.active}>
        {i + 1}
      </button>
    ) : (
      <button key={i + 1} onClick={() => handleClick(i)}>
        {i + 1}
      </button>
    )
  );

  function handleClick(page) {
    setPage(page);
    console.log(page);
  }

  function previousPage() {
    setPage((old) => old - 1);
  }
  function nextPage() {
    setPage((old) => old + 1);
  }
  return (
    <div className={Styles.overlay}>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" onClick={toggleOverlay} className={`bi bi-x ${Styles.closeButton}`}>
        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
      </svg>

      <div className={Styles.search__input}>
        <input type="text" id="searchBar" ref={searchGroup} onChange={searchProducts} placeholder="Search products.." />
      </div>

      {noProductsFound === true ? <h5>Your search gave 0 results. Try again!</h5> : null}
      {searched.length > 0 ? <h2>Results</h2> : <h2>Recommended for you</h2>}
      {console.log(noProductsFound)}
      <section>
        {searched.length > 0 ? (
          searched.slice(page * pPerPage, page * pPerPage + pPerPage).map((product) => <ProductTile product={product} key={product._id} products={products} />)
        ) : (
          <>
            {featured.map((product) => (
              <ProductTile product={product} key={product._id} products={featured} />
            ))}
          </>
        )}

        {nPages > 1 ? (
          <div className={Styles.pagination}>
            <button className={Styles.paginationButton} onClick={previousPage}>
              &#60;&#60; Previous
            </button>
            {buttonss}
            <button className={Styles.paginationButton} onClick={nextPage}>
              Next &#62;&#62;
            </button>
          </div>
        ) : null}
        {console.log("pages: ", nPages)}
      </section>
    </div>
  );
}
