import React, { useContext } from "react";
import { CartContext } from "./Cart/CartContext";

const Cart = () => {
  const { cartItems, clearCart } = useContext(CartContext);

  return (
    <div className="p-10">
      <div className="text-4xl">Cart</div>
      {cartItems.length === 0 ? (
        <div className="py-5">Your cart is empty</div>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} className="bg-white shadow-sm py-5 flex gap-3">
            <img src={item.image} width={100} />
            <div>
              <div className="text-2xl">{item.name}</div>
              <p>Price: ₹{item.price}</p>
              <p>Quantity: {item.quantity}</p>
            </div>
          </div>
        ))
      )}
      <button
        type="button"
        className="px-5 py-2 bg-red-400 rounded-md"
        onClick={() => clearCart()}
      >
        Clear
      </button>
    </div>
  );
};

export default Cart;
