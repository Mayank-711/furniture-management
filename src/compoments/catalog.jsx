// Catalog.js
import React from "react";
import FurnitureItemCard from "./product_card";

function Catalog({ allproducts }) {
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
    {
      id: 4,
      name: "Sofa",
      description: "Comfortable sofa for living room",
      price: 100,
      image: "https://via.placeholder.com/300",
    },
    {
      id: 5,
      name: "Chair",
      description: "Ergonomic chair for office",
      price: 50,
      image: "https://via.placeholder.com/300",
    },
    {
      id: 6,
      name: "Table",
      description: "Modern table for dining room",
      price: 200,
      image: "https://via.placeholder.com/300",
    },
    {
      id: 7,
      name: "Sofa",
      description: "Comfortable sofa for living room",
      price: 100,
      image: "https://via.placeholder.com/300",
    },
    {
      id: 8,
      name: "Chair",
      description: "Ergonomic chair for office",
      price: 50,
      image: "https://via.placeholder.com/300",
    },
    {
      id: 9,
      name: "Table",
      description: "Modern table for dining room",
      price: 200,
      image: "https://via.placeholder.com/300",
    },
    {
      id: 10,
      name: "Table",
      description: "Modern table for dining room",
      price: 200,
      image: "https://via.placeholder.com/300",
    },

    // Add more items to the array
  ];

  var currentFurnitureItems =
    allproducts === true ? furnitureItems : furnitureItems.slice(0, 3);
  console.log(currentFurnitureItems);
  return (
    <div className="flex justify-center items-center">
      <div className="w-full p-4 bg-white rounded">
        <h2 className="text-3xl font-bold mb-4 text-[#333333]">Catalog</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {currentFurnitureItems.map((item) => (
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
