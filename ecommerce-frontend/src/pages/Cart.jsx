import { useDispatch, useSelector } from "react-redux";

import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../store/cartSlice";

import "../styles/cart.css";

function Cart() {
  const dispatch = useDispatch();

  const { items } = useSelector((state) => state.cart);

  const totalItems = items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (items.length === 0) {
    return (
      <main className="cart-page">
        <h2>Your cart is empty.</h2>
      </main>
    );
  }

  return (
    <main className="cart-page">
      <h1>Shopping Cart</h1>

      {items.map((item) => (
        <div className="cart-item" key={item.id}>
          <img
            src={item.image}
            alt={item.title}
          />

          <div className="cart-info">
            <h3>{item.title}</h3>

            <p>${item.price}</p>

            <p>Quantity: {item.quantity}</p>

            <div className="cart-actions">
              <button
                onClick={() =>
                  dispatch(decreaseQuantity(item.id))
                }
              >
                -
              </button>

              <button
                onClick={() =>
                  dispatch(increaseQuantity(item.id))
                }
              >
                +
              </button>

              <button
                onClick={() =>
                  dispatch(removeFromCart(item.id))
                }
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      ))}

      <div className="cart-summary">
        <h2>Total Items: {totalItems}</h2>

        <h2>Total Price: ${totalPrice.toFixed(2)}</h2>
      </div>
    </main>
  );
}

export default Cart;