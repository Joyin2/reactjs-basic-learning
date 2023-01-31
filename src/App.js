import React from "react";
import Home from "./pages/Home";
import {Routes, Route} from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Detail from "./pages/Detail"
import AddEditBlog from "./pages/AddEditBlog"
import About from "./pages/About"
function App() {
  return (
    <div >
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/detail/:id" element={<Detail/>} />
        <Route path="/create" element={<AddEditBlog/>} />
        <Route path="/update/:id" element={<AddEditBlog/>} />
        <Route path="/about" element={<About/>} />


        
      </Routes>
      
    </div>
  );
}

export default App;
