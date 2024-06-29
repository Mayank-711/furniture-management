import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Cart/CartContext";
import { auth } from "../firebase/firebase";
import { AuthContext } from "../AuthContext";

function NavBar() {
  // const { currentUser } = useContext(AuthContext);
  const { cartItems } = useContext(CartContext);
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
          {null === null && (
            <Link to={"/login"} className="text-xl">
              Login
            </Link>
          )}
          <Link to={"/cart"}>
            <div className="relative">
              <img src="src/assets/cart.svg" className="p-1" />
              <div className="absolute right-0 -bottom-1">
                {cartItems.length}
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default NavBar;
