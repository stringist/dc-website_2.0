import Link from "next/link";
import Category from "../components/Category";
import ProductItem from "../components/product-tile/ProductItem";
import data from "./data";
import Breadcrumbs from "../components/Breadcrumbs";

export default function productList() {
  return (
    <>
      {/* <Breadcrumbs /> */}
      <h2>All Products</h2>
      <div className="product-grid">
        {data.products.map((product) => (
          <ProductItem product={product} key={product.slug} />
        ))}
      </div>
    </>
  );
}
