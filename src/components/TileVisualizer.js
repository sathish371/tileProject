
import React, { useState } from "react";



const tiles = [
  {
    id: 1,
    name: "Praga Taupe",
    size: "1200x1800 mm",
    category: "Glossy",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2SmWU9B_ugTDcp4yzZ8T_cdH72uUeBrOdSrOipW0eusWCFnumxgbTrfteNbUrz0zsab4&usqp=CAU",
  },
  {
    id: 2,
    name: "Firmiva Metallic - F",
    size: "300x300 mm",
    category: "Antiskid Flooring",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaBzZewTi-ORpKLlvGcuJzvq_rlpaqsdv-GQ&s",
  },
  // More tiles...
];

const TileVisualizer = () => {
  const [selectedTile, setSelectedTile] = useState(null);

  const handleTileSelect = (tile) => {
    setSelectedTile(tile);
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-4">Tile Visualizer</h2>
      
      {/* Room Preview with Floor Overlay */}
      <div className="relative room-preview bg-gray-200 p-6 rounded-lg shadow-md">
        {/* Room Background */}
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSukUgwoYgwX1eHDcd6LZqTYP0hQL1ufAefgA&s" // Replace with your default room image path
          alt="Room Preview"
          className="w-full h-64 object-cover"
        />
        
        {/* Floor Area Overlay for Selected Tile */}
        {selectedTile && (
          <div className="absolute inset-0 flex items-end justify-center p-6">
            <div
              className="floor-area w-full h-1/3 bg-cover bg-center opacity-70"
              style={{
                backgroundImage: `url(${selectedTile.imageUrl})`, // Use selected tile's image as background
                backgroundSize: "100px 100px", // Adjust to control tile repetition and scale
              }}
            ></div>
          </div>
        )}
      </div>

      {/* Tile Selection List */}
      <div className="tiles-list mt-4 flex space-x-4">
        {tiles.map((tile) => (
          <div
            key={tile.id}
            onClick={() => handleTileSelect(tile)}
            className="tile-item cursor-pointer p-2 border rounded-md shadow-md hover:bg-gray-100"
          >
            <img src={tile.imageUrl} alt={tile.name} className="w-24 h-24" />
            <p className="text-center mt-2 font-semibold">{tile.name}</p>
            {/* Additional tile information */}
            <p className="text-sm text-center text-gray-600">{tile.size}</p>
            <p className="text-sm text-center text-gray-500">{tile.category}</p>
          </div>
        ))}
      </div>

      {/* Selected Tile Details */}
      {selectedTile && (
        <div className="selected-tile-details mt-4 p-4 bg-gray-100 rounded shadow">
          <h3 className="text-xl font-semibold">Selected Tile: {selectedTile.name}</h3>
          <p>Size: {selectedTile.size}</p>
          <p>Category: {selectedTile.category}</p>
        </div>
      )}
    </div>
  );
};

export default TileVisualizer;
