import ProductTile from "./product-tile/ProductTile";
import { v4 as uuidv4 } from "uuid";
import React from "react";
import { useState, useConditions } from "react";
import intersect from "just-intersect";

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

  function toggleFilter() {}

  function filterByBrands(data) {
    //we have an array of stuff and want to compoare it to a string
    if (brandFilter.length === 0) {
      return data;
    }
    return data.filter((el) => brandFilter.includes(el.brand));
  }
  function filterByColors(data) {
    //we have an array of stuff and want to compare it to aa array of stuff
    if (colorFilter.length === 0) {
      return data;
    }

    return data.filter((el) => intersect(colorFilter, el.color).length);
  }

  let filteredList = [...categoryList];

  filteredList = filterByBrands(filteredList);
  filteredList = filterByColors(filteredList);

  return (
    <>
      <div className="category-page">
        <div className="filters">
          <legend>Brand</legend>
          {brands.map((brand) => (
            <>
              <input type="checkbox" id={brand} name={brand} value={brand} onChange={toggleBrand}></input>
              <label htmlFor={brand}>{brand}</label>
            </>
          ))}

          <legend>Color</legend>
          {colors.map((color) => (
            <>
              <input type="checkbox" id={color} name={color} value={color} onChange={toggleColor}></input>
              <label htmlFor={color}>{color}</label>
            </>
          ))}
          <legend>Speed</legend>
          {speeds.map((speed) => (
            <>
              <input type="checkbox" id={speed} name={speed} value={speed} onChange={toggleFilter}></input>
              <label htmlFor={speed}>{speed}</label>
            </>
          ))}
          <legend>Glide</legend>
          {glides.map((speed) => (
            <>
              <input type="checkbox" id={speed} name={speed} value={speed} onChange={toggleFilter}></input>
              <label htmlFor={speed}>{speed}</label>
            </>
          ))}
          <legend>Turn</legend>
          {turns.map((speed) => (
            <>
              <input type="checkbox" id={speed} name={speed} value={speed} onChange={toggleFilter}></input>
              <label htmlFor={speed}>{speed}</label>
            </>
          ))}
          <legend>Fade</legend>
          {fades.map((speed) => (
            <>
              <input type="checkbox" id={speed} name={speed} value={speed} onChange={toggleFilter}></input>
              <label htmlFor={speed}>{speed}</label>
            </>
          ))}
          <legend>Price range</legend>
        </div>
        <div className="products">
          <h1>{category}</h1>
          <div className="product-grid">
            {filteredList.map((product) => (
              <ProductTile product={product} key={product._id} products={products} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
