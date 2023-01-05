import Link from "next/link";
// import React from "react";
// import useState from "react";
import FeaturedTile from "./FeaturedTile";
import styles from "../../styles/Home.module.scss";
import { v4 as uuidv4 } from "uuid";

export default function Featured({ products }) {
  let featuredProds = products.filter((product) => product.featured === true);
  let firstIndex = 0;
  let lastIndex = 3;
  let currentProds = featuredProds.filter(
    (prod, i) => i >= firstIndex && i <= lastIndex
  );
  console.log(featuredProds, currentProds);
  return (
    <section className={styles.featured}>
      <h2>Featured</h2>
      <div className={styles.carousel}>
        <button className={styles.controlContainer}>
          <div
            className={`${styles.arrowControl} ${styles.arrowControlLeft}`}
          onClick={() => this.handleClick()}></div>
        </button>
        {currentProds.map((product) => (
          <FeaturedTile key={uuidv4} product={product} id={product.id} />
        ))}
        <button className={styles.controlContainer}>
          <div
            className={`${styles.arrowControl} ${styles.arrowControlRight}`}
          onClick={() => this.handleClick()}></div>
        </button>
  </div>
      <Link href="/productList/Discs">
        <div className="section-link">
          <a className="arrow-blue">View all discs </a>
        </div>
      </Link>
    </section>
  );
}

export async function getStaticPaths() {
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

  const paths = data.map((product) => {
    return {
      params: { category: product.category.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
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

  return {
    props: { products: await req.json() },
  };
}
