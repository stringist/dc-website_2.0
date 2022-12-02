import React from "react";
import Link from "next/link";
import Image from "next/image";

import FlightScore from "./FlightScore";

export default function ProductItem({ product }) {
  return (
    <Link href={`/product/${product.slug}`}>
      <div className="product-tile">
        <Image src={product.image} alt={product.name} width={200} height={200} layout="responsive"></Image>

        <div className="flight-score">
          <FlightScore kind="Speed" score={product.speed} />
          <FlightScore kind="Glide" score={product.glide} />
          <FlightScore kind="Turn" score={product.turn} />
          <FlightScore kind="Fade" score={product.fade} />
        </div>

        <p>
          {product.brand} - {product.brand}
        </p>
        <h3>{product.name}</h3>
        <p className="price">
          <span>{product.price}</span> dkk
        </p>
      </div>
    </Link>
  );
}
