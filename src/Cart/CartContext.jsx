import React, { createContext, useState, useEffect } from "react";
import { addOrder } from "../firebase/firestore";
import { Navigate } from "react-router-dom";
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (cartItem) => cartItem.id === item.id
      );
      if (existingItem) {
        return prevItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prevItems, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (item) => {
    var prevItems = cartItems.map((ele) => {
      var quantity = ele.quantity;
      if (ele.id === item.id && quantity > 0) {
        return { ...ele, quantity: quantity - 1 };
      } else {
        return ele;
      }
    });
    console.log(prevItems);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const checkOut = async () => {
    await addOrder(cartItems);
    clearCart();
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart, checkOut }}
    >
      {children}
    </CartContext.Provider>
  );
};
