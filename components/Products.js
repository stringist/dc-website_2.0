import ProductTile from "./product-tile/ProductTile";
import { v4 as uuidv4 } from "uuid";
import React from "react";
import { useState } from "react";

export default function Products({ category, products }) {
  const [brandFilter, setBrandFilter] = useState([]);
  const [filteredByBrand, setFilteredByBrand] = useState(false);
  const [colorFilter, setColorFilter] = useState([]);
  const [speedFilter, setSpeedFilter] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  let results = new Array();

  let categoryList = products.filter((product) => product.category === category);

  let brands = [...new Set(categoryList.map((product) => product.brand))];
  brands.sort(function (a, b) {
    return a > b;
  });

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
  colors.sort(function (a, b) {
    return a > b;
  });

  let speeds = [...new Set(categoryList.map((product) => product.speed))];
  speeds.sort(function (a, b) {
    return a - b;
  });
  let glides = [...new Set(categoryList.map((product) => product.glide))];
  glides.sort(function (a, b) {
    return a > b;
  });
  let turns = [...new Set(categoryList.map((product) => product.turn))];
  let fades = [...new Set(categoryList.map((product) => product.fade))];

  function handleBrands(e) {
    e.target.checked && !brandFilter.includes(e.target.value) ? setBrandFilter((old) => old.concat(e.target.value)) : null;
    !e.target.checked && brandFilter.includes(e.target.value) ? setBrandFilter((old) => old.filter((brand) => brand !== e.target.value)) : null;
    filterList();
    // brandFilter === [] ? setFilteredByBrand(false) : setFilteredByBrand(true);
  }
  function handleColor(e) {
    e.target.checked && !colorFilter.includes(e.target.value) ? setColorFilter((old) => old.concat(e.target.value)) : null;
    !e.target.checked && colorFilter.includes(e.target.value) ? setColorFilter((old) => old.filter((color) => color !== e.target.value)) : null;
    filterList();
  }
  function handleSpeed(e) {
    e.target.checked && !speedFilter.includes(e.target.value) ? setSpeedFilter((old) => old.concat(e.target.value)) : null;
    !e.target.checked && speedFilter.includes(e.target.value) ? setSpeedFilter((old) => old.filter((color) => color !== e.target.value)) : null;
  }

  function filterList() {
    if (brandFilter.length > 0) {
      results = brandFilter.map((brand) => categoryList.filter((product) => product.brand === brand));

      console.log("step 1 results", results);
    }
    if (colorFilter.length > 0) {
      results = colorFilter.map((color) => results[0].filter((product) => product.color === color));
      console.log("step 2 results", results);
    }
  }

  return (
    <>
      <div className="category-page">
        <div className="filters">
          <p>Brand</p>

          {brands.map((brand) => (
            <>
              <input type="checkbox" id={brand} name={brand} value={brand} onChange={handleBrands}></input>
              <label htmlFor={brand}>{brand}</label>
            </>
          ))}

          <p>Color</p>
          {colors.map((color) => (
            <>
              <input type="checkbox" id={color} name={color} value={color} onChange={handleColor}></input>
              <label htmlFor={color}>{color}</label>
            </>
          ))}
          <p>Speed</p>
          {speeds.map((speed) => (
            <>
              <input type="checkbox" id={speed} name={speed} value={speed} onChange={handleSpeed}></input>
              <label htmlFor={speed}>{speed}</label>
            </>
          ))}
          <p>Glide</p>
          <p>Turn</p>
          <p>Fade</p>
          <p>Price range</p>
        </div>
        <div className="products">
          <h2>{category}</h2>
          <div className="product-grid">
            {filterList(brandFilter, colorFilter, speedFilter)}

            {console.log("brandFilter", brandFilter.length > 0)}
            {categoryList.map((product) => (
              <ProductTile product={product} key={product._id} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
