import Head from "next/head";
import Image from "next/image";
import Hero from "../components/hero";
import styles from "../styles/Home.module.scss";
import Link from "next/link";
import ProductTile from "../components/product-tile/ProductTile";

export default function Home({ products }) {
  console.log(products);
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
          <Link href="/productList/discs">
            <a className="arrow">View all discs</a>
          </Link>
        </section>
        <section id="about">
          <article>
            <h2>About</h2>
            <p>
              Disc Connection er en 2-mands interessentvirksomhed hvis primære formål er at udbrede disc golf-sporten i Danmark via salg af discs og udstyr til disc golf. Vi er startet sammen i foråret 2006 og er den mest alsidige importør og
              forhandler af golfdiscs og udstyr til disc golf, og har et meget stort og bredt udvalg af kvalitetsprodukter, samt Danmarks bedste priser - uanset om du handler online, i vores Proshop i Tune, eller i vores partnerbutikker i Roskilde,
              på RUC, i Viby eller på Østerbro.
            </p>
            <p>
              Vi er som udgangspunkt til stede med vores &quot;mobile butik&quot; i Valbyparken 3-4 dage om ugen, herunder de fleste weekender &lpar;når vi ikke er ude til turneringer&rpar;. Vi er derudover næsten altid repræsenteret med butikken til
              turneringer på Sjælland. Derudover kan vores Proshop på Greve-banen ved Tune Kursuscenter besøges, hvor du kan se hele vores lager. Se ugens åbningstider her.
            </p>
            <Link href="/about">
              <button className="primary-button">Read More</button>
            </Link>
          </article>
        </section>
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
    headers: { "cache-control": "no-cache", "x-apikey": "a7a3d1237d76a4c6bd5943e4230d2b86f526e" },
  });
  const data = await req.json();

  if (data)
    return {
      props: { products: data },
    };
}
