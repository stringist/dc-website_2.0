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
    let speedNumber = parseFloat(e.target.value);
    e.target.checked && !speedFilter.includes(speedNumber) ? setSpeedFilter((old) => old.concat(speedNumber)) : null;
    !e.target.checked && speedFilter.includes(speedNumber) ? setSpeedFilter((old) => old.filter((speed) => speed !== speedNumber)) : null;
  }

  // function filterList() {
  //   let filteredList = categoryList;
  //   if (brandFilter.length > 0) {
  //     // results = brandFilter.map((brand) => categoryList.filter((product) => product.brand === brand));

  //     var keys = ["brand"];
  //     var values = brandFilter;

  //     var result = categoryList.filter(function (e) {
  //       return keys.every(function (a) {
  //         return values.includes(e[a]);
  //       });
  //     });
  //     filteredList = result;
  //     // console.log("step 1 results", result);
  //   }

  //   console.log("filteredLisssssst", filteredList);

  //   if (colorFilter.length > 0) {
  //     // // results = colorFilter.map((color) => results[0].filter((product) => product.color === color));
  //     // var keys = ["color"];
  //     // var values = colorFilter;
  //     // var result = results.filter(function (e) {
  //     //   return keys.every(function (a) {
  //     //     return values.includes(e[a]);
  //     //   });
  //     // });
  //     // // results = result;
  //     // console.log("step 2 results", result);
  //   }
  //   if (speedFilter.length > 0) {
  //     // results = colorFilter.map((color) => results[0].filter((product) => product.color === color));
  //     var keys = ["speed"];
  //     var values = speedFilter;

  //     var result = categoryList.filter(function (e) {
  //       return keys.every(function (a) {
  //         return values.includes(e[a]);
  //       });
  //     });

  //     // results = result;
  //     console.log("step 2 results", filteredList);
  //   }
  // }

  function filterList() {
    var useConditions = (search) => (a) =>
        Object.keys(search).every(
          (k) => a[k] === search[k] || (Array.isArray(search[k]) && search[k].includes(a[k])) || (typeof search[k] === "object" && +search[k].min <= a[k] && a[k] <= +search[k].max) || (typeof search[k] === "function" && search[k](a[k]))
        ),
      data = [
        { id: "123", color: "Red", model: "Tesla" },
        { id: "124", color: "Black", model: "Honda" },
        { id: "125", color: "Red", model: "Audi" },
        { id: "126", color: "Blue", model: "Tesla" },
      ],
      filters = { color: ["Red", "Blue"], model: "Tesla" };

    console.log(data.filter(useConditions(filters)));
  }

  return (
    <>
      <div className="category-page">
        <div className="filters">
          <p>Brand</p>
          {console.log(speedFilter)}
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
