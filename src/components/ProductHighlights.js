import React from 'react';

const ProductHighlights = () => {
  const highlights = [
    { icon: "🎨", title: "Versatile" },
    { icon: "🪨", title: "Natural Stone Look" },
    { icon: "🪶", title: "Lightweight" },
    { icon: "🔄", title: "Endless Design & Size" },
    { icon: "🛠", title: "Rectified" },
    { icon: "❄️", title: "Frost Resistant" },
    { icon: "🌈", title: "Vibrant Colors" },
    { icon: "🏡", title: "Homey Feel" },
    { icon: "💪", title: "Durable" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="relative overflow-hidden">
        <div className="flex animate-carousel">
          {highlights.map((item, index) => (
            <div key={index} className="flex-none w-1/4 p-4">
              <div className="bg-gradient-to-r from-blue-300 to-blue-500 text-white p-10 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductHighlights;
