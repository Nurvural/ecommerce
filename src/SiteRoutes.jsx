import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Products from "./products/Products";
import Login from "./pages/Login";
import ProductCard from "./products/ProductCard";
import { Category, ProductLayout } from "./products";
import Cart from "./products/Cart";

function SiteRoutes({handleLogin}) {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/products" element={<ProductLayout />}>
        <Route index={true} element={<Products />} />
        <Route path="/products/category/:categoryName" element={<Category />} />
      </Route>
      <Route path="/cart" element={<Cart />} />
      <Route path="/product" element={<ProductCard />} />
      <Route path="/login" element={<Login handleLogin={handleLogin}/>} />
    </Routes>
  );
}

export default SiteRoutes;
