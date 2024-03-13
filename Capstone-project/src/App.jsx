import {useState, useEffect } from "react";
import React from "react";
import { Routes, Route } from "react-router-dom";
import AllProducts from "./components/AllProducts";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import NavBar from "./components/NavBar";
import { fetchAllProducts, getSingleProduct } from "./api"
import SingleProduct from "./components/SingleProduct";
import ProductCardItem from "./components/ProductCardItem";
import Cart from "./components/Cart";


function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState(null);
  useEffect(() => {
    const getAllProducts = async () => {
      const products = await fetchAllProducts();
      setProducts(products);
    }
    getAllProducts();
  }, []);
    



  const [token, setToken] = useState(localStorage.getItem("token") || null);
  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
  }, [token]);
  return (
    <div>
      <NavBar token={token} setToken={setToken}/>
      <Routes>
      <Route path="/SignUp" element={<SignUp setToken={setToken} />} />
      <Route path="/login" element={<Login setToken={setToken} setUser={setUser} setCart={setCart} />} />
        <Route path="/" element={<AllProducts products={products} />} />
        <Route path="/:productId" element={<SingleProduct />} />
        <Route path="/" element={<AllProducts products={products} token={token} />} />
        <Route path="/:productId" element={<SingleProduct token={token} />} />
        <Route path="/cart"  element={<Cart cart={cart} products={products} setCart={setCart} />}/>
        
      </Routes>
        
    </div>
  )
  

}
  
  
    

export default App
