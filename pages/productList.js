import Link from "next/link";
import Category from "../components/Category";
import ProductItem from "../components/product-tile/ProductItem";
import data from "../utilities/data";
import Breadcrumbs from "../components/Breadcrumbs";

export default function productList() {
  return (
    <div className="category-page">
      {/* <Breadcrumbs /> */}

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
          {data.products.map((product) => (
            <ProductItem product={product} key={product.slug} />
          ))}
        </div>
      </div>
    </div>
  );
}
