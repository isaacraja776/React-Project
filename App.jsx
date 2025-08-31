import { useState } from "react";
import "./App.css";

import Navbar from "./Component/navbar/navbar.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Product from "./Pages/product";
import Shop from "./Pages/Shop.jsx";

import ShopCategory from "./Pages/shopcategory";
import LoginSignup from "./Pages/LoginSignup.jsx";

import Footer from "./Component/Footer/Footer.jsx";
import mens_banner from "./Component/assets/banner_mens.png";

import women_banner from "./Component/assets/banner_women.png";
import kid_banner from "./Component/assets/banner_kids.png";
import Cart from "./Pages/Cart.jsx";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Navbar></Navbar>
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route
              path="/mens"
              element={<ShopCategory banner={mens_banner} category="men" />}
            />
            <Route
              path="/Women"
              element={<ShopCategory banner={women_banner} category="women" />}
            />
            <Route
              path="/Kids"
              element={<ShopCategory banner={kid_banner} category="kid" />}
            />
            <Route path="/product" element={<Product />}>
              <Route path=":productId" element={<Product />} />
            </Route>
            <Route path="/cart" element={<Cart/>} />
            <Route path="/login" element={<LoginSignup />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
