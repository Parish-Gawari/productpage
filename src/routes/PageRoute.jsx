/* eslint-disable no-unused-vars */
import React from "react";
import Home from "./../pages/Home";
import { Route, Routes } from "react-router-dom";
import ProductDetail from "../pages/ProductDetail";
import Login from "../pages/Login";

const PageRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/productdetail/:id" element={<ProductDetail />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default PageRoute;
