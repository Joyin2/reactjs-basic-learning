import "./App.css"
import "./style.scss"
import "./media-query.css"
import React from "react";
import {useState} from "react"
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Detail from "./pages/Detail";
import AddEditBlog from "./pages/AddEditBlog";
import About from "./pages/About";
import Notfound from "./pages/Notfound";
import Header from "./components/Header";

function App() {
  const [active, setActive]= useState("home")
  return (
    <div>
    <Header setActive={setActive} active={active} />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/create" element={<AddEditBlog />} />
        <Route path="/update/:id" element={<AddEditBlog />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </div>
  );
}

export default App;
