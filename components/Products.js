import ProductTile from "./product-tile/ProductTile";
import { v4 as uuidv4 } from "uuid";
import React from "react";
import { useState, useConditions } from "react";
import intersect from "just-intersect";
import Collapsible from "react-collapsible";

import styles from "../styles/ProductList.module.scss";

function cuuid() {
  const str = (Date.now().toString(16) + Math.random().toString(16).slice(2) + Math.random().toString(16).slice(2) + Math.random().toString(16).slice(2)).slice(0, 32);
  return str.slice(0, 8) + "-" + str.slice(8, 12) + "-" + str.slice(12, 16) + "-" + str.slice(16, 20) + "-" + str.slice(20);
}

export default function Products({ category, products }) {
  const [brandFilter, setBrandFilter] = useState([]);
  const [colorFilter, setColorFilter] = useState([]);
  const [speedFilter, setSpeedFilter] = useState([]);
  const [subcFilter, setSubcFilter] = useState([]);

  const [sortBy, setSortBy] = useState("name");

  let categoryList = products.filter((product) => product.category === category);

  let brands = [...new Set(categoryList.map((product) => product.brand))];
  let subcategories = [...new Set(categoryList.map((product) => product.subcategory))];
  let colors = [
    ...new Set(
      categoryList.map((product) => {
        if (Array.isArray(product.color)) {
          const iterator = product.color.values();
          for (let el of iterator) {
            return el.charAt(0).toUpperCase() + el.substring(1);
          }
        } else {
          return product.color.charAt(0).toUpperCase() + product.color.substring(1);
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
    console.log(speedFilter);
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
    console.log(sort);
    return data.sort((a, b) => a[sort] > b[sort]);
  }

  return (
    <>
      {console.log(sortBy)}
      <div className={styles.category_page}>
        <div className={styles.filters}>
          <div className={styles.sorting}>
            <label htmlFor="sorting">Sort by:</label>
            <select name="sorting" id="sorting" onChange={handleSort}>
              <option value="name">Name A-Z</option>
              <option value="price">Lowest Price</option>
              {console.log("subcatefories:", subcategories)}
              {subcategories.length > 1 ? <option value="speed">Lowest Speed</option> : null}
            </select>
          </div>

          <Collapsible trigger="Brand">
            {brands.map((brand) => (
              <div className={styles.input_group} key={uuidv4}>
                <input type="checkbox" id={brand} name={brand} value={brand} onChange={toggleBrand}></input>
                <label htmlFor={brand}>{brand}</label>
              </div>
            ))}
          </Collapsible>
          {subcategories.length > 1 ? (
            <Collapsible trigger="Subcategory ">
              {subcategories.map((subc) => (
                <div className={styles.input_group} key={uuidv4}>
                  <input type="checkbox" id={subc} name={subc} value={subc} onChange={toggleSubc}></input>
                  <label htmlFor={subc}>{subc}</label>
                </div>
              ))}
            </Collapsible>
          ) : null}

          <Collapsible trigger="Color">
            {colors.map((color) => (
              <div className={styles.input_group} key={uuidv4}>
                <input type="checkbox" id={`color${color}`} name={`color${color}`} value={color} onChange={toggleColor}></input>
                <label htmlFor={`color${color}`}>{color}</label>
              </div>
            ))}
          </Collapsible>

          {subcategories.length > 1 != [] ? (
            <Collapsible trigger="Speed">
              {speeds.map((speed) => (
                <div className={styles.input_group} key={uuidv4}>
                  <input type="checkbox" id={`speed${speed}`} name={`speed${speed}`} value={speed} onChange={toggleSpeed}></input>
                  <label htmlFor={`speed${speed}`}>{speed}</label>
                </div>
              ))}
            </Collapsible>
          ) : null}
        </div>
        <div className={styles.products}>
          <h1>{category}</h1>
          <section className={styles.product_grid}>{filteredList.length === 0 ? <p>No product found :(</p> : filteredList.map((product) => <ProductTile product={product} key={product._id} products={products} />)}</section>
        </div>
      </div>
    </>
  );
}
