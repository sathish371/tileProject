import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-100 p-4 shadow">
      <nav className="flex justify-between items-center container mx-auto">
        <div className="logo">
          <h1 className="text-2xl font-bold text-blue-500">TITAN CERAMICS</h1>
        </div>
        <ul className="flex space-x-4">
          <li><Link to="/" className="text-gray-600">Home</Link></li>
          <li><Link to="/about" className="text-gray-600">About Us</Link></li>
          <li><Link to="/products" className="text-gray-600">Products</Link></li>
          <li><Link to="/catalog" className="text-gray-600">Catalog</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
