import { useSelector, useDispatch } from "react-redux";
import Image from "next/image";
import { incrementQuantity, decrementQuantity, removeFromCart } from "./redux/cart.slice";

export default function Cart() {
  // Extracting cart state from redux store
  const cart = useSelector((state) => state.cart);
  console.log(cart);

  // Reference to the dispatch function from redux store
  const dispatch = useDispatch();

  function getTotalPrice() {
    return cart.reduce((accumulator, item) => accumulator + item.quantity * item.price, 0);
  }

  return (
    <div>
      {cart.length === 0 ? (
        <h1>Your Cart is Empty!</h1>
      ) : (
        <>
          <div>
            <div>Image</div>
            <div>item</div>
            <div>Price</div>
            <div>Quantity</div>
            <div>Actions</div>
            <div>Total Price</div>
          </div>
          {cart.map((item) => (
            <div key={item._id}>
              <div>
                <Image src={item.img} height="90" width="65" alt={item.name} />
              </div>
              <p>{item.item}</p>
              <p>$ {item.price}</p>
              <p>{item.quantity}</p>
              <div>
                <button onClick={() => dispatch(incrementQuantity(item._id))}>+</button>
                <button onClick={() => dispatch(decrementQuantity(item._id))}>-</button>
                <button onClick={() => dispatch(removeFromCart(item._id))}>x</button>
              </div>
              <p>$ {item.quantity * item.price}</p>
            </div>
          ))}
          <h2>Grand Total: {getTotalPrice()} dkk</h2>
        </>
      )}
    </div>
  );
}
