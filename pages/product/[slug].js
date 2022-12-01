import { useRouter } from "next/router";
import React from "react";
import data from "../data";

export default function ProductPage() {
  const { query } = useRouter();
  const { slug } = query;
  const product = data.products.find((x) => x.slug === slug);

  if (!product) {
    return <p> product not found</p>;
  }
  return <div>{product.name}</div>;
}
