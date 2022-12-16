import React from "react";
import Link from "next/link";
import Image from "next/image";

import FlightScore from "./FlightScore";

import styles from "../../styles/ProductList.module.scss";

export default function ProductTile({ product }) {
  let productImages = [];
  product.img.includes(",")
    ? (productImages = product.img.split(","))
    : (productImages = productImages.concat(product.img));

  return (
    <article>
      <Link href={`/product/${product._id}`}>
        <div className={styles.product_tile}>
          <Image
            src={productImages[0]}
            alt={product.name}
            width={200}
            height={200}
            layout="responsive"
            placeholder="blur"
            blurDataURL="/images/placeholder.png"
          ></Image>

          {product.speed !== 0 ? (
            <div className={styles.flight_score}>
              <FlightScore kind="Speed" score={product.speed} />
              <FlightScore kind="Glide" score={product.glide} />
              <FlightScore kind="Turn" score={product.turn} />
              <FlightScore kind="Fade" score={product.fade} />
            </div>
          ) : null}

          <p>{product.brand}</p>
          <h3>{product.name}</h3>
          <p className={styles.price}>
            <span>{product.price}</span> dkk
          </p>

          <div className={styles.colors_available}>
            {product.color.map((color, index) => (
              <div className={styles.color_span} style={{ backgroundColor: color }} key={index}></div>
            ))}
          </div>
        </div>
      </Link>
    </article>
  );
}
