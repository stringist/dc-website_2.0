import ProductTile from "./product-tile/ProductTile";

export default function Products({ category, products }) {
  let categoryList = products.filter((product) => product.category === category);

  return (
    <div className="category-page">
      <h1>{category}</h1>

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
  );
}
