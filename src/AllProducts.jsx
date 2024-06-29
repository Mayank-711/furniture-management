import Catalog from "./compoments/catalog";

function AllProducts() {
  return (
    <div className="flex items-center justify-center">
      <Catalog allproducts={true} />
    </div>
  );
}
export default AllProducts;
