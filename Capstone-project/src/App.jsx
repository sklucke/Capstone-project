import { useState, useEffect } from "react";
import React from "react";
import { Routes, Route } from "react-router-dom";
import AllProducts from "./components/AllProducts";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import NavBar from "./components/NavBar";
import { fetchAllProducts, getSingleProduct } from "./api";
import SingleProduct from "./components/SingleProduct";
import ProductCardItem from "./components/ProductCardItem";
import CheckoutPage from "./components/CheckoutPage";
import Cart from "./components/Cart";
import Categories from "./components/Categories";
import CategoriesDropdown from "./components/CategoriesDropdown";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart" || []))
  );
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user" || null))
  );
  useEffect(() => {
    const getAllProducts = async () => {
      const products = await fetchAllProducts();
      setProducts(products);
    };
    getAllProducts();
  }, []);

  const [token, setToken] = useState(localStorage.getItem("token") || null);
  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
      const userObj = JSON.stringify(user);
      localStorage.setItem("user", userObj);
      const cartArr = JSON.stringify(cart);
      localStorage.setItem("cart", cartArr);
    } else {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      localStorage.removeItem("cart");
    }
  }, [token, cart, user]);
  return (
    <div>
      <NavBar token={token} setToken={setToken} />
      <CategoriesDropdown/>
      <Routes>
        <Route path="/SignUp" element={<SignUp setToken={setToken} />} />
        <Route
          path="/login"
          element={
            <Login setToken={setToken} setUser={setUser} setCart={setCart} />
          }
        />
        <Route path="/" element={<AllProducts products={products} cart={cart} setCart={setCart} />} />
        <Route path="/:productId" element={<SingleProduct setCart={setCart} cart={cart} />} />
        <Route
          path="/"
          element={<AllProducts products={products} token={token} />}
        />
        <Route path="/:productId" element={<SingleProduct token={token} />} />
        <Route
          path="/cart"
          element={<Cart cart={cart} products={products} setCart={setCart} />}
        />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/categories/:categoryItem" element={<Categories products={products} setCart={setCart} cart={cart} />} />
        
        
      </Routes>
      
    </div>
  );
}

export default App;
