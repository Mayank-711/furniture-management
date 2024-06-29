import { useEffect, useState } from "react";

function ProductCard({ props }) {
  const [products, setProducts] = useState([
    {
      id: "1",
      name: "Sofa",
      color: ["green", "blue"],
      price: 400,
    },
  ]);
  return <div>{products[props.id].name}</div>;
}
export default ProductCard;
