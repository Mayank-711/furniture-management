// Catalog.js
import React from "react";
import FurnitureItemCard from "./product_card";

function Catalog() {
  const furnitureItems = [
    {
      id: 1,
      name: "Sofa",
      description: "Comfortable sofa for living room",
      price: 100,
      image: "https://via.placeholder.com/300",
    },
    {
      id: 2,
      name: "Chair",
      description: "Ergonomic chair for office",
      price: 50,
      image: "https://via.placeholder.com/300",
    },
    {
      id: 3,
      name: "Table",
      description: "Modern table for dining room",
      price: 200,
      image: "https://via.placeholder.com/300",
    },
    // Add more items to the array
  ];

  return (
    <div className="h-screen flex justify-center items-center bg-[#F7F7F7] p-5">
      <div className="w-full p-4 bg-white shadow-md rounded">
        <h2 className="text-3xl font-bold mb-4 text-[#333333]">Catalog</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {furnitureItems.map((item) => (
            <FurnitureItemCard
              key={item.id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Catalog;
