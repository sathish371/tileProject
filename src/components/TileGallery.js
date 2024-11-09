import React from 'react';
import img705908 from '../Assets/705908.jpg';
import img705946 from '../Assets/705946.jpg';
import img705994 from '../Assets/705994.jpg';

const TileGallery = () => {
  const tiles = [
    { image: img705908, title: "Wall Tile - 600x300mm" },
    { image: img705946, title: "Picture Tile - 450x300mm" },
    { image: img705994, title: "Digital Tile - 450x300mm" },
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Our Products</h2>
        <div className="grid grid-cols-3 gap-8">
          {tiles.map((tile, index) => (
            <div key={index} className="text-center">
              <img src={tile.image} alt={tile.title} className="w-full h-64 object-cover mb-4" />
              <h3 className="text-xl font-semibold">{tile.title}</h3>
              <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">View Specs</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TileGallery;
