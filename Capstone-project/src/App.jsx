import {useState, useEffect } from "react";
import React from "react";
import { Routes, Route } from "react-router-dom";
import AllProducts from "./components/AllProducts";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import NavBar from "./components/NavBar";
import { fetchAllProducts, getSingleProduct } from "./api"
import SingleProduct from "./components/SingleProduct";


function App() {
  const [products, setProducts] = useState([]);
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
      <Route path="/login" element={<Login setToken={setToken} />} />
        <Route path="/" element={<AllProducts products={products} />} />
        <Route path="/:productId" element={<SingleProduct />} />

        
      </Routes>
        
    </div>
  )
  

}
  
  
    

export default App
