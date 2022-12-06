import ProductTile from "./product-tile/ProductTile";

export default function Products({ category, products }) {
  let categoryList = products.filter((product) => product.category === category);

  let filteredList;
  let brands = [...new Set(categoryList.map((product) => product.brand))];
  let subcategories = [...new Set(categoryList.map((product) => product.subcategory))];
  let colors = [
    ...new Set(
      categoryList.map((product) => {
        if (Array.isArray(product.color)) {
          // console.log(...product.color);
          // return product.color;
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

  return (
    <>
      <h1>{category}</h1>
      <div className="category-page">
        <div className="filters">
          <p>Brand</p>

          <p>Color</p>
          <p>Speed</p>
          <p>Glide</p>
          <p>Turn</p>
          <p>Fade</p>
          <p>Price range</p>
        </div>
        <div className="products">
          <h2>All Products</h2>
          <div className="product-grid">
            {categoryList.map((product) => (
              <ProductTile product={product} key={product._id} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
