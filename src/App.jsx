import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import { Navbar } from "./components/Navbar";
import { Cart } from "./pages/Cart";
import { All_Products } from "./components/All_Products";
import { Product_Detail } from "./pages/Product_Detail";
import { Product_By_Category } from "./pages/Product_By_Category";
import { Search_Product } from "./pages/Search_Product";
import { Trending_Slider } from "./components/Trending_Slider";
import { Footer } from "./components/Footer";

export const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<All_Products />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/product/:id" element={<Product_Detail />}></Route>
        <Route
          path="/product/category/:cat"
          element={<Product_By_Category />}
        ></Route>
        <Route
          path="/product/search/:term"
          element={<Search_Product />}
        ></Route>
      </Routes>
      <Trending_Slider />
      <Footer />
    </Router>
  );
};
