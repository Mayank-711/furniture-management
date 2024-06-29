import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./compoments/navbar.jsx";
import Login from "./Login.jsx";
import Signup from "./SignUp.jsx";
import AllProducts from "./AllProducts.jsx";
import Cart from "./Cart.jsx";
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/all" element={<AllProducts />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
    <ToastContainer />
  </BrowserRouter>
);
