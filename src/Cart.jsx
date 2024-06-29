import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "./Cart/CartContext";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { cartItems, clearCart, checkOut, addToCart, removeFromCart } =
    useContext(CartContext);
  const navigate = useNavigate();
  const [total, setTotal] = useState(0);
  const [checkoutComplete, setCheckoutComplete] = useState(false);
  useEffect(() => {
    var sum = 0;
    cartItems.forEach((element) => {
      sum += element.price * element.quantity;
    });
    console.log(sum);
    setTotal(sum);
  }, [cartItems]);

  return (
    <div className="flex items-center justify-center">
      <div className="p-10 max-w-screen-lg">
        <div className="text-4xl">Cart</div>
        {cartItems.length === 0 ? (
          <div className="py-5">
            {checkoutComplete
              ? "Order Placed Successfully!"
              : "Your cart is empty"}
          </div>
        ) : (
          cartItems.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-sm py-5 flex items-center justify-center gap-3"
            >
              <img src={item.image} width={200} />
              <div>
                <div className="text-2xl">{item.name}</div>
                <p>Price: ₹{item.price}</p>
                <div className="flex gap-5 items-center">
                  <button
                    type="button"
                    onClick={() => removeFromCart(item)}
                    className="text-2xl bold"
                  >
                    -
                  </button>
                  <div className="text-xl">{item.quantity}</div>
                  <button
                    type="button"
                    onClick={() => addToCart(item)}
                    className="text-2xl bold"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
        <div className="flex">
          <div className="w-[200px] text-2xl">Total: ₹ </div>
          <div className="text-2xl">{total}</div>
        </div>
        <div className="flex gap-5">
          <button
            type="button"
            className="px-5 py-2 bg-emerald-400 rounded-md"
            onClick={async () => {
              if (checkoutComplete) {
                navigate("/");
              } else {
                await checkOut();
                setCheckoutComplete(true);
              }
            }}
          >
            {checkoutComplete ? "Back to Home" : "Checkout"}
          </button>
          {!checkoutComplete && (
            <button
              type="button"
              className="px-5 py-2 bg-red-400 rounded-md"
              onClick={() => clearCart()}
            >
              Clear
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cart;
