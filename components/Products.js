import ProductTile from "./product-tile/ProductTile";
import { v4 as uuidv4 } from "uuid";
import React from "react";
import { useState, useConditions } from "react";

export default function Products({ category, products }) {
  const [brandFilter, setBrandFilter] = useState([]);
  const [colorFilter, setColorFilter] = useState([]);
  const [speedFilter, setSpeedFilter] = useState([]);
  const [glideFilter, setGlideFilter] = useState([]);
  const [turnFilter, setTurnFilter] = useState([]);
  const [fadeFilter, setFadeFilter] = useState([]);

  let categoryList = products.filter((product) => product.category === category);
  let filteredList = categoryList;

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
  turns.sort(function (a, b) {
    return a > b;
  });
  let fades = [...new Set(categoryList.map((product) => product.fade))];
  fades.sort(function (a, b) {
    return a > b;
  });

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
    let speedNumber = parseFloat(e.target.value);
    e.target.checked && !speedFilter.includes(speedNumber) ? setSpeedFilter((old) => old.concat(speedNumber)) : null;
    !e.target.checked && speedFilter.includes(speedNumber) ? setSpeedFilter((old) => old.filter((speed) => speed !== speedNumber)) : null;
    filterList();
  }
  function handleGlide(e) {
    let glideNumber = parseFloat(e.target.value);
    e.target.checked && !speedFilter.includes(glideNumber) ? setSpeedFilter((old) => old.concat(glideNumber)) : null;
    !e.target.checked && speedFilter.includes(glideNumber) ? setSpeedFilter((old) => old.filter((glide) => glide !== glideNumber)) : null;
    filterList();
  }
  function handleTurn(e) {
    let turnNumber = parseFloat(e.target.value);
    e.target.checked && !speedFilter.includes(turnNumber) ? setSpeedFilter((old) => old.concat(turnNumber)) : null;
    !e.target.checked && speedFilter.includes(turnNumber) ? setSpeedFilter((old) => old.filter((turn) => turn !== turnNumber)) : null;
    filterList();
  }
  function handleFade(e) {
    let fadeNumber = parseFloat(e.target.value);
    e.target.checked && !speedFilter.includes(fadeNumber) ? setSpeedFilter((old) => old.concat(fadeNumber)) : null;
    !e.target.checked && speedFilter.includes(fadeNumber) ? setSpeedFilter((old) => old.filter((fade) => fade !== fadeNumber)) : null;
    filterList();
  }

  function filterList() {
    filterByBrand();

    function filterByBrand() {
      if (brandFilter.length > 0) {
        var keys = ["brand"];
        var values = brandFilter;

        var result = categoryList.filter(function (product) {
          return keys.every(function (filter) {
            return values.includes(product[filter]);
          });
        });
        filteredList = result;
      }
      console.log("step 1:", filteredList);

      filterByColor(filteredList);

      function filterByColor(filteredList) {
        if (colorFilter.length > 0) {
          var keys = ["color"];
          var values = speedFilter;

          var result = filteredList.filter(function (product) {
            return keys.every(function (filter) {
              return values.includes(product[filter]);
            });
          });
          return (filteredList = result);
        }
        console.log("step 2:", filteredList);
        filterBySpeed(filteredList);
      }

      function filterBySpeed(filteredList) {
        if (speedFilter.length > 0) {
          var keys = ["speed"];
          var values = speedFilter;

          var result = filteredList.filter(function (product) {
            return keys.every(function (filter) {
              return values.includes(product[filter]);
            });
          });
          return (filteredList = result);
        }
        console.log("step 3:", filteredList);
        filterByGlide(filteredList);
      }

      function filterByGlide(filteredList) {
        if (glideFilter.length > 0) {
          var keys = ["glide"];
          var values = glideFilter;

          var result = filteredList.filter(function (product) {
            return keys.every(function (filter) {
              return values.includes(product[filter]);
            });
          });
          filteredList = result;
        }
        console.log("step 4:", filteredList);
        filterByTurn(filteredList);
      }
      function filterByTurn(filteredList) {
        if (turnFilter.length > 0) {
          var keys = ["turn"];
          var values = turnFilter;

          var result = filteredList.filter(function (product) {
            return keys.every(function (filter) {
              return values.includes(product[filter]);
            });
          });
          filteredList = result;
        }
        console.log("step 5:", filteredList);
        filterByFade(filteredList);
      }
      function filterByFade(filteredList) {
        if (fadeFilter.length > 0) {
          var keys = ["fade"];
          var values = fadeFilter;

          var result = filteredList.filter(function (product) {
            return keys.every(function (filter) {
              return values.includes(product[filter]);
            });
          });
          filteredList = result;
        }
        // console.log("step 6:", filteredList);
      }
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
          {glides.map((speed) => (
            <>
              <input type="checkbox" id={speed} name={speed} value={speed} onChange={handleSpeed}></input>
              <label htmlFor={speed}>{speed}</label>
            </>
          ))}
          <p>Turn</p>
          {turns.map((speed) => (
            <>
              <input type="checkbox" id={speed} name={speed} value={speed} onChange={handleSpeed}></input>
              <label htmlFor={speed}>{speed}</label>
            </>
          ))}
          <p>Fade</p>
          {fades.map((speed) => (
            <>
              <input type="checkbox" id={speed} name={speed} value={speed} onChange={handleSpeed}></input>
              <label htmlFor={speed}>{speed}</label>
            </>
          ))}
          <p>Price range</p>
        </div>
        <div className="products">
          <h2>{category}</h2>
          <div className="product-grid">
            {filterList(brandFilter, colorFilter, speedFilter)}

            {/* {console.log("brandFilter", brandFilter.length > 0)} */}
            {filteredList.map((product) => (
              <ProductTile product={product} key={product._id} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
