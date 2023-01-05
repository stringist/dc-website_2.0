import Link from "next/link";
// import React from "react";
// import useState from "react";
import FeaturedTile from "./FeaturedTile";
import styles from "../../styles/Home.module.scss";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

export default function Featured({ products }) {
  const [firstIndex, setFirstIndex] = useState(0);
  const [lastIndex, setLastIndex] = useState(3);
  let featuredProds = products.filter((product) => product.featured === true);
  // let firstIndex = 0;
  // let lastIndex = 3;
  let currentProds = featuredProds.filter(
    (prod, i) => i >= firstIndex && i <= lastIndex
  );

  function Button({ role, children }) {
    let disabled = false;

    return (
      <button
        className={styles.controlContainer}
        onClick={() => updateGallery(role)}
        disabled={role === "prev" && firstIndex === 0 ? true : false}
      >
        {children}
      </button>
    );
  }

  function updateGallery(role) {
    console.log(role, firstIndex);
    if (role === "prev" && firstIndex > 0) {
      setFirstIndex(firstIndex - 4);
      setLastIndex(lastIndex - 4);
    } else {
      setFirstIndex(firstIndex + 4);
      setLastIndex(lastIndex + 4);
    }
  }

  return (
    <section className={styles.featured}>
      <h2>Featured</h2>
      <div className={styles.carousel}>
        <Button role="prev">
          <div
            className={`${styles.arrowControl} ${styles.arrowControlLeft}`}
          ></div>
        </Button>
        {currentProds.map((product) => (
          <FeaturedTile key={uuidv4} product={product} id={product.id} />
        ))}
        <Button role="next">
          <div
            className={`${styles.arrowControl} ${styles.arrowControlRight}`}
          ></div>
        </Button>
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
