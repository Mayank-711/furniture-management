// FurnitureItemCard.js

function FurnitureItemCard({ name, description, price, image }) {
  const addToCart = () => {};

  return (
    <div className="bg-white shadow-md rounded p-4">
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover rounded-t"
      />
      <h3 className="text-lg font-bold mb-2">{name}</h3>
      <p className="text-gray-600">{description}</p>
      <p className="text-lg font-bold">₹{price}</p>
      <button
        className="bg-[#8B9467] hover:bg-[#8B9467] text-white font-bold py-2 px-4 rounded"
        onClick={() => addToCart()}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default FurnitureItemCard;
