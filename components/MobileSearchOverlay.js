import Styles from "../styles/MobileSearch.module.scss";
import { useRef, useState, useEffect } from "react";
import ProductTile from "./product-tile/ProductTile";
import MyLoader from "../components/MyLoader";

export default function MobileSearchOverlay(props) {
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
    setIsLoading(true);
    fetch(url, options)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        const timing = setTimeout(() => {
          setIsLoading(false);
        }, 100);
        return () => clearTimeout(timing);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const searchGroup = useRef();

  const featured = products.filter((product) => {
    return product.featured === true;
  });

  function searchProducts(e) {
    const input = e.target.value.toLowerCase();
    const searchedProducts = products.filter((product) => {
      return product.name.toLowerCase().includes(input) || product.brand.toLowerCase().includes(input) || product.subcategory.toLowerCase().includes(input);
    });
    console.log("searched", input);
    searchedProducts.length === 0 ? setNoProductsFound(true) : setNoProductsFound(false);

    input === "" ? setSearched([]) : setSearched(searchedProducts);
    // console.log(input);
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
  }

  function previousPage() {
    page > 0 ? setPage((old) => old - 1) : null;
  }
  function nextPage() {
    page < nPages - 1 ? setPage((old) => old + 1) : null;
  }

  if (isLoading) {
    return (
      <div className={Styles.page}>
        <MyLoader />
      </div>
    );
  }
  return (
    <div className={Styles.page}>
      <div className={Styles.search__input}>
        <input type="text" id="searchBar" ref={searchGroup} onChange={searchProducts} placeholder="Search products.." />
      </div>

      {noProductsFound === true ? <h5>Your search gave 0 results. Try again!</h5> : null}
      {searched.length > 0 ? <h2>Results</h2> : <h2>Recommended for you</h2>}
      {/* {console.log(noProductsFound)} */}
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
              &#60;&#60;
            </button>
            {buttonss}
            <button className={Styles.paginationButton} onClick={nextPage}>
              &#62;&#62;
            </button>
          </div>
        ) : null}
      </section>
    </div>
  );
}
