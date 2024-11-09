import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductHighlights from "./components/ProductHighlights";
import TileGallery from "./components/TileGallery";
import Footer from "./components/Footer";
import Carousel from "./components/Carousel";
import Reviews from "./components/Reviews";
import CompanyDetails from "./components/CompanyDetails";
import TileCategories from "./components/TileCategories";
import TileCategory from "./components/ TileCategory";
import Calculator from "./components/Calculator";
import TileVisualizer from "./components/TileVisualizer";

function App() {
  return (
    <div>
      <Header />

      {/* Navbar Links */}
      

      {/* Define Routes */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Carousel />
              <ProductHighlights />
              <TileCategories />
              <CompanyDetails />
              <TileCategory />
              <TileGallery />
              <Reviews />
              <Footer />
            </>
          }
        />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/TileVisualizer" element={<TileVisualizer />} />
      </Routes>
    </div>
  );
}

export default App;
