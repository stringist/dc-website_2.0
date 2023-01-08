import ProductTile from "./product-tile/ProductTile";
import React from "react";
import { useState, useEffect } from "react";
import intersect from "just-intersect";
import Collapsible from "react-collapsible";
import MobileFilters from "./MobileFilters";
import styles from "../styles/ProductList.module.scss";
import Styles from "../styles/Search.module.scss";
import stylesProduct from "../styles/Product.module.scss";
import Link from "next/link";
export default function Products({ category, products }) {
  const [brandFilter, setBrandFilter] = useState([]);
  const [colorFilter, setColorFilter] = useState([]);
  const [speedFilter, setSpeedFilter] = useState([]);
  const [subcFilter, setSubcFilter] = useState([]);

  const [sortBy, setSortBy] = useState("name");

  let categoryList = products.filter(
    (product) => product.category === category
  );

  let brands = [...new Set(categoryList.map((product) => product.brand))];
  let subcategories = [
    ...new Set(categoryList.map((product) => product.subcategory)),
  ];
  let colors = [
    ...new Set(
      categoryList.map((product) => {
        if (Array.isArray(product.color)) {
          const iterator = product.color.values();
          for (let el of iterator) {
            return el;
          }
        } else {
          return product.color;
        }
      })
    ),
  ];
  let speeds = [...new Set(categoryList.map((product) => product.speed))];

  sortData(brands);
  sortData(subcategories);
  sortData(colors);
  sortData(speeds);

  function sortData(data) {
    data.sort(function (a, b) {
      return a > b;
    });
  }

  function toggleBrand(e) {
    if (e.target.checked) {
      setBrandFilter((old) => old.concat(e.target.value));
    } else {
      setBrandFilter((old) => old.filter((el) => el !== e.target.value));
    }
  }
  function toggleSubc(e) {
    if (e.target.checked) {
      setSubcFilter((old) => old.concat(e.target.value));
    } else {
      setSubcFilter((old) => old.filter((el) => el !== e.target.value));
    }
  }
  function toggleColor(e) {
    if (e.target.checked) {
      setColorFilter((old) => old.concat(e.target.value));
    } else {
      setColorFilter((old) => old.filter((el) => el !== e.target.value));
    }
  }
  function toggleSpeed(e) {
    const myNumber = parseFloat(e.target.value);
    if (e.target.checked) {
      setSpeedFilter((old) => old.concat(myNumber));
    } else {
      setSpeedFilter((old) => old.filter((el) => el !== myNumber));
    }
    // console.log(speedFilter);
  }

  function toggleFilter() {}

  function filterByBrands(data) {
    if (brandFilter.length === 0) {
      return data;
    }
    return data.filter((el) => brandFilter.includes(el.brand));
  }
  function filterBySubc(data) {
    if (subcFilter.length === 0) {
      return data;
    }
    return data.filter((el) => subcFilter.includes(el.subcategory));
  }
  function filterByColors(data) {
    if (colorFilter.length === 0) {
      return data;
    }

    return data.filter((el) => intersect(colorFilter, el.color).length);
  }
  function filterBySpeeds(data) {
    if (speedFilter.length === 0) {
      return data;
    }
    return data.filter((el) => speedFilter.includes(el.speed));
  }

  let filteredList = [...categoryList];

  filteredList = filterByBrands(filteredList);
  filteredList = filterBySubc(filteredList);
  filteredList = filterByColors(filteredList);
  filteredList = filterBySpeeds(filteredList);

  filteredList = sortList(filteredList, sortBy);

  function handleSort(e) {
    setSortBy(e.target.value);
  }

  function sortList(data, sort) {
    // console.log(sort);
    return data.sort((a, b) => a[sort] > b[sort]);
  }

  const [page, setPage] = useState(0);
  const [nPages, setNPages] = useState(0);
  const [pageButtons, setPageButtons] = useState([]);

  const pPerPage = 16;

  useEffect(() => {
    setNPages(Math.ceil(filteredList.length / pPerPage));
  }, [filteredList.length]);

  const buttonss = [...Array(nPages)].map((e, i) =>
    page === i ? (
      <button
        key={i + 1}
        onClick={() => handleClick(i)}
        className={Styles.active}
      >
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
    // console.log(page);
  }

  function previousPage() {
    setPage((old) => old - 1);
  }
  function nextPage() {
    setPage((old) => old + 1);
  }

  const [menuOpen, setMenuOpen] = useState(false);
  const [isOpening, setIsOpening] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleToggle = () => {
    menuOpen ? setIsOpening(true) : setIsClosing(true);
    setMenuOpen((prev) => !prev);
  };
  const closeMenu = () => {
    console.log("close menu");
    setMenuOpen(false);
  };

  return (
    <>
      <div className={styles.category_page}>
        <div className={styles.filters}>
          {/* <div className={styles.sorting}>
            <label htmlFor="sorting">Sort by:</label>
            <select name="sorting" id="sorting" onChange={handleSort}>
              <option value="name">Name A-Z</option>
              <option value="price">Lowest Price</option>

              {subcategories.length > 1 ? <option value="speed">Lowest Speed</option> : null}
            </select>
          </div> */}
          <div className={styles.breadcrumbs}>
            <Link href="/">
              <a>Home</a>
            </Link>{" "}
            <span>/</span>
            <Link href={"/productList/" + category}>
              <a>{category}</a>
            </Link>{" "}
          </div>
          <Collapsible trigger="Brand">
            {brands.map((brand, index) => (
              <div className={styles.input_group} key={index}>
                <input
                  type="checkbox"
                  id={brand}
                  name={brand}
                  value={brand}
                  onChange={toggleBrand}
                ></input>
                <label htmlFor={brand}>{brand}</label>
              </div>
            ))}
          </Collapsible>
          {subcategories.length > 1 ? (
            <Collapsible trigger="Subcategory">
              {subcategories.map((subc, index) => (
                <div className={styles.input_group} key={index}>
                  <input
                    type="checkbox"
                    id={subc}
                    name={subc}
                    value={subc}
                    onChange={toggleSubc}
                  ></input>
                  <label htmlFor={subc}>{subc}</label>
                </div>
              ))}
            </Collapsible>
          ) : null}

          <Collapsible trigger="Color">
            {colors.map((color, index) => (
              <div className={styles.input_group} key={index}>
                <input
                  type="checkbox"
                  id={color}
                  name={color}
                  value={color}
                  onChange={toggleColor}
                ></input>
                <label htmlFor={color}>
                  {color.charAt(0).toUpperCase() + color.substring(1)}
                </label>
              </div>
            ))}
          </Collapsible>

          {subcategories.length > 1 != [] ? (
            <Collapsible trigger="Speed">
              {speeds.map((speed, index) => (
                <div className={styles.input_group} key={index}>
                  <input
                    type="checkbox"
                    id={speed}
                    name={speed}
                    value={speed}
                    onChange={toggleSpeed}
                  ></input>
                  <label htmlFor={speed}>{speed}</label>
                </div>
              ))}
            </Collapsible>
          ) : null}
        </div>

        <div className={styles.products}>
          {/* <MobileFilters /> */}

          {
            <div className={styles.mobile_breadcrumbs}>
              <Link href="/">
                <a>Home</a>
              </Link>{" "}
              <span>/</span>
              <Link href={"/productList/" + category}>
                <a>{category}</a>
              </Link>{" "}
            </div>
          }
          <button
            className={`${styles.openFilters} ${
              menuOpen ? styles.open : styles.closed
            }`}
            onClick={handleToggle}
          >
            {menuOpen ? (
              <div className="arrowRight"></div>
            ) : (
              <div className="arrowLeft"></div>
            )}
            {menuOpen ? "Close" : "Filter your search"}
          </button>
          <div
            className={`${styles.mobileFilterMenu} ${
              menuOpen ? styles.showMenu : null
            } ${isOpening ? styles.showingMenu : null} ${
              isClosing ? styles.closingMenu : null
            }`}
          >
            {/* <div
              className={`${menuOpen ? styles.showMenu : null} ${isOpening ? styles.showingMenu : null} ${
                isClosing ? styles.closingMenu : null
              }`}
            > */}
            {/* <button className={styles.closeFilters} onClick={closeMenu}>
              <span>Close</span>
            </button> */}
            <Collapsible trigger="Brand">
              {brands.map((brand, index) => (
                <div className={styles.input_group} key={index}>
                  <input
                    type="checkbox"
                    id={brand}
                    name={brand}
                    value={brand}
                    onChange={toggleBrand}
                  ></input>
                  <label htmlFor={brand}>{brand}</label>
                </div>
              ))}
            </Collapsible>
            {subcategories.length > 1 ? (
              <Collapsible trigger="Subcategory">
                {subcategories.map((subc, index) => (
                  <div className={styles.input_group} key={index}>
                    <input
                      type="checkbox"
                      id={subc}
                      name={subc}
                      value={subc}
                      onChange={toggleSubc}
                    ></input>
                    <label htmlFor={subc}>{subc}</label>
                  </div>
                ))}
              </Collapsible>
            ) : null}

            <Collapsible trigger="Color">
              {colors.map((color, index) => (
                <div className={styles.input_group} key={index}>
                  <input
                    type="checkbox"
                    id={color}
                    name={color}
                    value={color}
                    onChange={toggleColor}
                  ></input>
                  <label htmlFor={color}>
                    {color.charAt(0).toUpperCase() + color.substring(1)}
                  </label>
                </div>
              ))}
            </Collapsible>

            {subcategories.length > 1 != [] ? (
              <Collapsible trigger="Speed">
                {speeds.map((speed, index) => (
                  <div className={styles.input_group} key={index}>
                    <input
                      type="checkbox"
                      id={speed}
                      name={speed}
                      value={speed}
                      onChange={toggleSpeed}
                    ></input>
                    <label htmlFor={speed}>{speed}</label>
                  </div>
                ))}
              </Collapsible>
            ) : null}
          </div>
          {/* </div> */}
          <h1>{category}</h1>

          <div className={`${styles.sorting} ${styles.desktop}`}>
            <label htmlFor="sorting">Sort by:</label>
            <select name="sorting" id="sorting" onChange={handleSort}>
              <option value="name">Name A-Z</option>
              <option value="price">Lowest Price</option>
              {console.log("subcatefories:", subcategories)}
              {subcategories.length > 1 ? (
                <option value="speed">Lowest Speed</option>
              ) : null}
            </select>
          </div>
          <section className={styles.product_grid}>
            {filteredList.length === 0 ? (
              <p>No product found :(</p>
            ) : (
              filteredList
                .slice(page * pPerPage, page * pPerPage + pPerPage)
                .map((product) => (
                  <ProductTile
                    product={product}
                    key={product._id}
                    products={products}
                  />
                ))
            )}
          </section>
          {nPages > 1 ? (
            <div className={Styles.pagination}>
              <button
                className={Styles.paginationButton}
                onClick={previousPage}
              >
                &#60; <span>Previous</span>
              </button>
              {buttonss}
              <button className={Styles.paginationButton} onClick={nextPage}>
                <span>Next</span> &#62;
              </button>
            </div>
          ) : null}
        </div>

        {/* {console.log(nPages)} */}
      </div>
    </>
  );
}
