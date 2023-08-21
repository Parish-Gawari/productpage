/* eslint-disable no-unused-vars */
import React from "react";
import Home from "./../pages/Home";
import { Route, Routes } from "react-router-dom";
import ProductDetail from "../pages/ProductDetail";

const PageRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/productdetail/:id" element={<ProductDetail />} />
    </Routes>
  );
};

export default PageRoute;
