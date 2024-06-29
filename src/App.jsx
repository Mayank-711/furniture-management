import Catalog from "./compoments/catalog";
import Footer from "./compoments/footer";
import ProductCard from "./compoments/product_card";

function App() {
  return (
    <div className="flex flex-col gap-20 p-5 overflow-y-scroll scrollbar-hide">
      <div className="flex flex-col items-center justify-center relative">
        <div className="text-4xl absolute top-10 ">
          Transforming Spaces with <span>Care</span> and <span>Comfort</span>
        </div>
        <img src="src/assets/background.jpg" alt="" />
      </div>
      <Catalog />
      <Footer />
    </div>
  );
}

export default App;
