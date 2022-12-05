import { useRouter } from "next/router";
import Image from "next/image";
import React, { useContext } from "react";
import { Store } from "../../utilities/Store";
import data from "../../utilities/data";
import Score from "../../components/product-page/Score";
import Quantity from "../../components/product-page/Quantity";

export default function ProductPage() {
  const [quant, setQuant] = [];

  const { state, dispatch } = useContext(Store);

  const { query } = useRouter();
  const { slug } = query;
  const product = data.products.find((x) => x.slug === slug);

  if (!product) {
    return <p> product not found</p>;
  }

  const addToCartHandler = () => {
    const itemExists = state.cart.cartItems.find((item) => item.slug === product.slug);
    const quantity = itemExists ? itemExists.quantity + 1 : 1;

    dispatch({ type: "CART_ADD_ITEM", payload: { ...product, quantity } });

    console.log(state.cart.cartItems.length);
  };

  return (
    <div className="product-page">
      <div className="left">
        <Image src={product.image} alt={product.name} width={200} height={200} layout="responsive"></Image>
        <div className="product-flight-score">
          <Score name="Speed" score={product.speed}></Score>
          <Score name="Glide" score={product.glide}></Score>
          <Score name="Turn" score={product.turn}></Score>
          <Score name="Fade" score={product.fade}></Score>
        </div>
      </div>

      <div className="right">
        {product.countInStock < 5 ? <p className="only-stock">Only {product.countInStock} left!</p> : null}
        <h2>{product.name}</h2>
        <h3>
          {product.brand} | {product.brand}
        </h3>

        <p>{product.description}</p>

        <p className="price">
          <span>{product.price}</span> dkk
        </p>

        <div className="input-grid">
          <div className="input-group">
            <label htmlFor="weight-color">Weight / Color:</label>
            <select name="weight-color" id="weight-color">
              <option value="pink">180g / Pink</option>
            </select>
          </div>
          <Quantity name="Quantity" quant={quant} setQuant={setQuant} />
        </div>

        <button onClick={addToCartHandler}>Add to basket</button>
      </div>
    </div>
  );
}
