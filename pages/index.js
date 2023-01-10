import Head from "next/head";
// import Image from "next/image";
import Hero from "../components/Hero";
import styles from "../styles/Home.module.scss";
// import Link from "next/link";
import Featured from "../components/home/Featured";
// import ProductTile from "../components/product-tile/ProductTile";
// import { ActiveLink } from 'next-active-link';

import HomeAbout from "../components/home/HomeAbout";
import ShopCategory from "../components/home/ShopCategory";
import BrandsGallery from "../components/home/BrandsGallery";
import Linking from "../components/LinkingChains";

export default function Home({ products }) {
  return (
    <>
      <Head>
        <title>Home - Disc Connection</title>
        <meta
          name="description"
          content="Salg af golf discs og udstyr til disc golf ultimate freestyle DDC guts"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Hero title="Disc Connection" />
      </header>
      <main className={styles.main}>
        <Featured products={products} />
        <HomeAbout />
        <ShopCategory />
        <Linking />
        <BrandsGallery />
      </main>
    </>
  );
}

export async function getStaticProps() {
  const req = await fetch(
    "https://cocktails-240e.restdb.io/rest/disc-connection",
    {
      method: "GET",
      headers: {
        "cache-control": "no-cache",
        "x-apikey": "a7a3d1237d76a4c6bd5943e4230d2b86f526e",
      },
    }
  );
  const data = await req.json();

  if (data)
    return {
      props: { products: data },
    };
}
