import Catalog from "./compoments/catalog";
import ProductCard from "./compoments/product_card";

function App() {
  return (
    <div className="flex flex-col gap-20">
      <div className="flex flex-col items-center justify-center gap-5 relative">
        <div className="text-4xl absolute top-10">
          Transforming Spaces with <span>Care</span> and <span>Comfort</span>
        </div>
        <img src="src/assets/background.jpg" alt="" />
      </div>
      <div>
        <div className="text-3xl">Top Products</div>
        <Catalog />
      </div>
    </div>
  );
}

export default App;
