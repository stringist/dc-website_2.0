import React from "react";
import Link from "next/link";
// eslint-disable-next-line @next/next/no-img-element

import FlightScore from "./FlightScore";

export default function ProductItem({ product }) {
  return (
    <div className="product-tile">
      <Link href={`/product/${product.slug}`}>
        <img src={product.image} alt={product.name} />
      </Link>

      <div className="flight-score">
        <FlightScore kind="Speed" score={product.speed} />
        <FlightScore kind="Glide" score={product.glide} />
        <FlightScore kind="Turn" score={product.turn} />
        <FlightScore kind="Fade" score={product.fade} />
      </div>

      <p>
        {product.brand} - {product.brand}
      </p>
      <h2>{product.name}</h2>
      <p className="price">
        <span>{product.price}</span> dkk
      </p>
    </div>
  );
}
