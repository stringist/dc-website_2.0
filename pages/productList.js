import Link from "next/link";
import ProductTile from "../components/product-tile/ProductTile";
// import data from "../utilities/data";
import Breadcrumbs from "../components/Breadcrumbs";

export default function productList({ products }) {
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
          {products.map((product) => (
            <ProductTile product={product} key={product._id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const req = await fetch("https://cocktails-240e.restdb.io/rest/disc-connection", {
    method: "GET",
    headers: { "cache-control": "no-cache", "x-apikey": "a7a3d1237d76a4c6bd5943e4230d2b86f526e" },
  });

  return {
    props: { products: await req.json() },
  };
}
