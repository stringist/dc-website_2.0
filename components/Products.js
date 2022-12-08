import ProductTile from "./product-tile/ProductTile";
import { v4 as uuidv4 } from "uuid";
import React from "react";
import { useState, useConditions } from "react";
import intersect from "just-intersect";

import styles from "../styles/ProductList.module.scss";

function cuuid() {
  const str = (Date.now().toString(16) + Math.random().toString(16).slice(2) + Math.random().toString(16).slice(2) + Math.random().toString(16).slice(2)).slice(0, 32);
  return str.slice(0, 8) + "-" + str.slice(8, 12) + "-" + str.slice(12, 16) + "-" + str.slice(16, 20) + "-" + str.slice(20);
}

export default function Products({ category, products }) {
  const [brandFilter, setBrandFilter] = useState([]);
  const [colorFilter, setColorFilter] = useState([]);
  const [speedFilter, setSpeedFilter] = useState([]);
  const [glideFilter, setGlideFilter] = useState([]);
  const [turnFilter, setTurnFilter] = useState([]);
  const [fadeFilter, setFadeFilter] = useState([]);

  let categoryList = products.filter((product) => product.category === category);

  let brands = [...new Set(categoryList.map((product) => product.brand))];
  let subcategories = [...new Set(categoryList.map((product) => product.subcategory))];
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
  let glides = [...new Set(categoryList.map((product) => product.glide))];
  let turns = [...new Set(categoryList.map((product) => product.turn))];
  let fades = [...new Set(categoryList.map((product) => product.fade))];
  sortData(brands);
  sortData(subcategories);
  sortData(colors);
  sortData(speeds);
  sortData(glides);
  sortData(turns);
  sortData(fades);

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
  function toggleGlide(e) {
    console.log(glideFilter);
    const myNumber = parseFloat(e.target.value);

    if (e.target.checked) {
      setGlideFilter((old) => old.concat(myNumber));
    } else {
      setGlideFilter((old) => old.filter((el) => el !== myNumber));
    }
  }

  function toggleFilter() {}

  function filterByBrands(data) {
    if (brandFilter.length === 0) {
      return data;
    }
    return data.filter((el) => brandFilter.includes(el.brand));
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
  function filterByGlides(data) {
    if (glideFilter.length === 0) {
      return data;
    }
    return data.filter((el) => glideFilter.includes(el.speed));
  }

  let filteredList = [...categoryList];

  filteredList = filterByBrands(filteredList);
  filteredList = filterByColors(filteredList);
  filteredList = filterBySpeeds(filteredList);
  // filteredList = filterByGlides(filteredList);

  return (
    <>
      <div className={styles.category_page}>
        <div className={styles.filters}>
          <legend>Brand</legend>
          {brands.map((brand) => (
            <div className={styles.input_group} key={uuidv4}>
              <input type="checkbox" id={brand} name={brand} value={brand} onChange={toggleBrand}></input>
              <label htmlFor={brand}>{brand}</label>
            </div>
          ))}

          <legend>Color</legend>
          {colors.map((color) => (
            <div className={styles.input_group} key={uuidv4}>
              <input type="checkbox" id={`color${color}`} name={`color${color}`} value={color} onChange={toggleColor}></input>
              <label htmlFor={`color${color}`}>{color}</label>
            </div>
          ))}
          <legend>Speed</legend>
          {speeds.map((speed) => (
            <div className={styles.input_group} key={uuidv4}>
              <input type="checkbox" id={`speed${speed}`} name={`speed${speed}`} value={speed} onChange={toggleSpeed}></input>
              <label htmlFor={`speed${speed}`}>{speed}</label>
            </div>
          ))}
          <legend>Glide</legend>
          {glides.map((glide) => (
            <div className={styles.input_group} key={uuidv4}>
              <input type="checkbox" id={`glide${glide}`} name={`glide${glide}`} value={glide} onChange={toggleGlide}></input>
              <label htmlFor={`glide${glide}`}>{glide}</label>
            </div>
          ))}
          <legend>Turn</legend>
          {turns.map((turn) => (
            <div className={styles.input_group} key={uuidv4}>
              <input type="checkbox" id={`turn${turn}`} name={`turn${turn}`} value={turn} onChange={toggleFilter}></input>
              <label htmlFor={`turn${turn}`}>{turn}</label>
            </div>
          ))}
          <legend>Fade</legend>
          {fades.map((fade) => (
            <div className={styles.input_group} key={uuidv4}>
              <input type="checkbox" id={`fade${fade}`} name={`fade${fade}`} value={fade} onChange={toggleFilter}></input>
              <label htmlFor={`fade${fade}`}>{fade}</label>
            </div>
          ))}
          <legend>Price range</legend>
        </div>
        <div className={styles.products}>
          <h1>{category}</h1>
          <section className={styles.product_grid}>{filteredList.length === 0 ? <p>No product found :(</p> : filteredList.map((product) => <ProductTile product={product} key={uuidv4} products={products} />)}</section>
        </div>
      </div>
    </>
  );
}
