import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  // Function to handle the button click for 360 tour
  const open360Tour = () => {
    window.open(
      "https://www.google.com/maps/@11.0506444,76.9905527,3a,75y,351.94h,90t/data=!3m8!1e1!3m6!1sAF1QipNyT_AyuAEiE8iUgZfEG_4iGfszjqEnFOoaVMuT!2e10!3e12!6s%2F%2Flh5.ggpht.com%2Fp%2FAF1QipNyT_AyuAEiE8iUgZfEG_4iGfszjqEnFOoaVMuT%3Dw900-h600-k-no-pi0-ya359.9984716796875-ro0-fo100!7i12000!8i6000?coh=205410&entry=ttu&g_ep=EgoyMDI0MTAyOS4wIKXMDSoASAFQAw%3D%3D",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section className="hero bg-gray-50 py-20 text-center">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8">Explore Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 360 Virtual Tour Section */}
          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-semibold mb-4">360 Virtual Tour</h3>
            <p className="text-gray-600 mb-6">
              Check out a 360 virtual tour of Titan Ceramics Emporium for the contemporary lifestyle.
            </p>
            <button
              onClick={open360Tour}
              className="bg-yellow-400 text-white py-2 px-4 rounded"
            >
              View 360 Emporium
            </button>
          </div>

          {/* Calculator Section */}
          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-semibold mb-4">Estimate Using Calculator</h3>
            <p className="text-gray-600 mb-6">
              Use our calculator to estimate costs and plan your budget.
            </p>
            <Link to="/calculator">
              <button className="bg-blue-500 text-white py-2 px-4 rounded">
                Open Calculator
              </button>
            </Link>
          </div>

          {/* Title Visualizer Section */}
          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-semibold mb-4">Title Visualizer</h3>
            <p className="text-gray-600 mb-6">
              Explore the perfect titles for your needs using our interactive tool.
            </p>
            <Link to="/TileVisualizer">
              <button className="bg-green-500 text-white py-2 px-4 rounded">
                Open Title Visualizer
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
