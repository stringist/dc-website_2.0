import Link from "next/link";
// import React from "react";
// import useState from "react";
import FeaturedTile from "./FeaturedTile";
import styles from "../../styles/Home.module.scss";
import { v4 as uuidv4 } from "uuid";

export default function Featured({ products }) {
  // const [featuredFilter, setFeaturedFilter] = useState([]);
  let featuredProds = products.filter((product) => product.featured === true);
  console.log(featuredProds);
  return (
    <section className={styles.featured}>
      <h2>Featured</h2>
      <div className={styles.carousel}>
        {featuredProds.map((product) => (
          <FeaturedTile key={uuidv4} product={product} id={product.id} />
        ))}
        {/* <FeaturedTile key={uuidv4} product ={featuredProds}/>
        <FeaturedTile key={uuidv4} />
        <FeaturedTile key={uuidv4} />
        <FeaturedTile key={uuidv4} /> */}
      </div>
      <Link href="/productList/Discs">
        <a className="arrow">View all discs </a>
      </Link>
    </section>
  );
}
