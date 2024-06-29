// Catalog.js
import React, { useEffect, useState } from "react";
import FurnitureItemCard from "./product_card";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";

function Catalog({ allproducts }) {
  const [furnitureItems, setFurnitureItems] = useState([]);

  useEffect(() => {
    async function fetchData() {
      await getDocs(collection(db, "Furnicare")).then((querySnapshot) => {
        const newData = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setFurnitureItems(newData);
      });
    }
    fetchData();
  }, []);

  var currentFurnitureItems =
    allproducts === true ? furnitureItems : furnitureItems.slice(0, 3);
  return (
    <div className="flex justify-center items-center max-w-screen-lg ">
      <div className="w-full p-4 bg-white rounded">
        <h2 className="text-3xl font-bold mb-4 text-[#333333]">Catalog</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {currentFurnitureItems.map((item) => (
            <FurnitureItemCard
              key={item.id}
              name={item.Name}
              description={item.Description}
              price={item.Price}
              image={item.Image}
              id={item.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Catalog;
