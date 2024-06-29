// FurnitureItemCard.js

import { useContext, useEffect, useState } from "react";
import { CartContext } from "../Cart/CartContext";

function FurnitureItemCard({ id, name, description, price, image }) {
  const { addToCart } = useContext(CartContext);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setClicked(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [clicked]);

  const handleAddToCart = () => {
    setClicked(true);
    addToCart({ id, name, description, price, image });
  };

  return (
    <div className="bg-white shadow-md rounded p-4">
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover rounded-t"
      />
      <h3 className="text-lg font-bold mb-2">{name}</h3>
      <div className="text-gray-600 line-clamp-2">{description}</div>
      <p className="text-lg font-bold">₹{price} per day</p>
      <button
        className="bg-[#8B9467] hover:bg-[#8B9467] text-white font-bold py-2 px-4 rounded"
        onClick={() => handleAddToCart()}
      >
        {clicked === false ? `Add to Cart` : <img src="src/assets/check.svg" />}
      </button>
    </div>
  );
}

export default FurnitureItemCard;
