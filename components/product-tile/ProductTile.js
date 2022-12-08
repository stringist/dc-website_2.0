import React from "react";
import Link from "next/link";
import Image from "next/image";

import FlightScore from "./FlightScore";

export default function ProductTile({ product }) {
  let productImages = [];
  product.img.includes(",") ? (productImages = product.img.split(",")) : (productImages = productImages.concat(product.img));

  return (
    <Link href={`/product/${product._id}`}>
      <div className="product-tile">
        <Image src={productImages[0]} alt={product.name} width={200} height={200} layout="responsive" placeholder="blur" blurDataURL="/placeholder.png"></Image>

        {product.speed !== 0 ? (
          <div className="flight-score">
            <FlightScore kind="Speed" score={product.speed} />
            <FlightScore kind="Glide" score={product.glide} />
            <FlightScore kind="Turn" score={product.turn} />
            <FlightScore kind="Fade" score={product.fade} />
          </div>
        ) : null}

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
