import React from "react";
import { Routes, Route } from "react-router-dom";
import  HomePage from "./components/HomePage"


function App() {
  return (
    <div className="bg-purple-400">
      <h1>App</h1>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
        
    </div>
  )
  

}
  
  
    

export default App
