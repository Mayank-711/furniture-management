import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="flex justify-center h-32">
      <div className="flex justify-between items-center  max-w-screen-lg w-full p-3 rounded-sm">
        <div className="left">
          <img src="src\assets\logo.webp" width={150} />
        </div>
        <div className="flex gap-3 md:gap-5 lg:gap-7">
          <Link to={"/"} className="text-xl">
            Home
          </Link>
          <Link to={"/all"} className="text-xl">
            Products
          </Link>
          <Link to={"/login"} className="text-xl">
            Login
          </Link>
          <Link to={"/cart"}>
            <img src="src/assets/cart.svg" />
          </Link>
        </div>
      </div>
    </div>
  );
}
export default NavBar;
