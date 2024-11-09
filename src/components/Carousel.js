import React, { useState, useEffect } from 'react';
import land1 from '../Assets/land1.jpg';
import land2 from '../Assets/land2.jpg';
import land3 from '../Assets/land3.jpg';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = [
    {
      src: land1,
      alt: 'Waterproof Surface',
      text: 'Waterproof Surface',
    },
    {
      src: land2,
      alt: 'Wear Resistance',
      text: 'Wear Resistance',
    },
    {
      src: land3,
      alt: 'Hygienic Surface & Scratch Resistant',
      text: 'Hygienic Surface & Scratch Resistant',
    },
  ];

  // Automatic sliding logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 2000); // Automatic fade every 2 seconds

    return () => {
      clearInterval(interval); // Cleanup the interval on unmount or reset
    };
  }, [items.length]);

  // Handle manual navigation and reset auto-slide interval
  const goToPrevious = () => {
    setCurrentIndex((currentIndex - 1 + items.length) % items.length);
  };

  const goToNext = () => {
    setCurrentIndex((currentIndex + 1) % items.length);
  };

  return (
    <div className="relative overflow-hidden w-full h-96">
      <div className="relative w-full h-full">
        {items.map((item, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="p-4 w-full h-full flex justify-center items-center">
              <div className="text-center">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="mx-auto w-full h-auto object-cover"
                  style={{ maxHeight: '100%' }}
                />
                <p className="mt-2 text-gray-800">{item.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Prev/Next buttons */}
      <button
        onClick={goToPrevious}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-200 hover:bg-gray-400 rounded-full"
        aria-label="Previous"
      >
        {'<'}
      </button>
      <button
        onClick={goToNext}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-200 hover:bg-gray-400 rounded-full"
        aria-label="Next"
      >
        {'>'}
      </button>
    </div>
  );
};

export default Carousel;
