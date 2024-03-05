import {useState, useEffect } from "react";
import React from "react";
import { Routes, Route } from "react-router-dom";
import  HomePage from "./components/HomePage"
import Login from "./components/Login";
import SignUp from "./components/SignUp";


function App() {
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
      <h1>App</h1>
      <Routes>
      <Route path="/SignUp" element={<SignUp setToken={setToken} />} />
      <Route path="/login" element={<Login setToken={setToken} />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
        
    </div>
  )
  

}
  
  
    

export default App
