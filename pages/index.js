import Head from "next/head";
import Image from "next/image";
import Hero from "../components/hero";
import styles from "../styles/Home.module.scss";
import Link from "next/link";
import ProductTile from "../components/product-tile/ProductTile";
import HomeAbout from "../components/home/HomeAbout";

export default function Home({ products }) {
  return (
    <>
      <Head>
        <title>Disc Connection</title>
        <meta name="description" content="Salg af golf discs og udstyr til disc golf ultimate freestyle DDC guts" />
        <link rel="icon" href="/DC_logo_new.ico" />
      </Head>
      <header>
        <Hero title="Disc Connection" />
      </header>
      <main>
        <section id="featured">
          <h2>Featured</h2>
          <div className="featured-carousel">
            {/* <ProductTile></ProductTile>
            <ProductTile></ProductTile>
            <ProductTile></ProductTile>
            <ProductTile></ProductTile> */}
          </div>
          <Link href="/productList">
            <a className="arrow">View all discs</a>
          </Link>
        </section>
        <section id="about"></section>
        <HomeAbout />
        <section id="category">
          <h2>Shop By Category</h2>
          <div className="category-group">
            <div className="category-card">
              <Image src="/../public/images/placeholder_disc.png" alt="Discs" width="100%" height="300px"></Image>
              <Link href="/productList">
                <a>Discs</a>
              </Link>
            </div>
            <div className="category-card">
              <Image src="/../public/images/backpack.png" alt="Bags" width="100%" height="300px"></Image>
              <Link href="/productList">
                <a>Bags</a>
              </Link>
            </div>
            <div className="category-card">
              <Image src="/../public/images/placeholder_hat.png" alt="Accessories" width="100%" height="300px"></Image>
              <Link href="/productList">
                <a>Accessories</a>
              </Link>
            </div>
          </div>
        </section>
        <section id="linking-chains"></section>
        <section id="brands">
          <h2>Brands</h2>
        </section>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const req = await fetch("https://cocktails-240e.restdb.io/rest/disc-connection", {
    method: "GET",
    headers: {
      "cache-control": "no-cache",
      "x-apikey": "a7a3d1237d76a4c6bd5943e4230d2b86f526e",
    },
  });
  const data = await req.json();

  if (data)
    return {
      props: { products: data },
    };
}
