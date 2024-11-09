import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle'; // Import all necessary Swiper styles

function TTileCategory() {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <h2 className="text-3xl font-bold text-center mb-6">Tile Categories</h2>

      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
        className="mb-8"
      >
        <SwiperSlide>
          <TileCategory
            title="Bathroom Wall Tiles"
            imageUrl="https://picsum.photos/200/300"
            description="Explore our bathroom wall tiles."
            icon="🛁"
          />
        </SwiperSlide>
        <SwiperSlide>
          <TileCategory
            title="Kitchen Wall Tiles"
            imageUrl="https://picsum.photos/200/301"
            description="Stylish tiles for your kitchen."
            icon="🍽️"
          />
        </SwiperSlide>
        <SwiperSlide>
          <TileCategory
            title="Living Room Wall Tiles"
            imageUrl="https://picsum.photos/200/302"
            description="Upgrade your living room with beautiful tiles."
            icon="🛋️"
          />
        </SwiperSlide>
        <SwiperSlide>
          <TileCategory
            title="Outdoor Wall Tiles"
            imageUrl="https://picsum.photos/200/303"
            description="Durable tiles for outdoor spaces."
            icon="🏡"
          />
        </SwiperSlide>
        <SwiperSlide>
          <TileCategory
            title="Bedroom Wall Tiles"
            imageUrl="https://picsum.photos/200/304"
            description="Create a cozy bedroom atmosphere."
            icon="🛏️"
          />
        </SwiperSlide>
        <SwiperSlide>
          <TileCategory
            title="Office Wall Tiles"
            imageUrl="https://picsum.photos/200/305"
            description="Professional tiles for office spaces."
            icon="💼"
          />
        </SwiperSlide>
        <SwiperSlide>
          <TileCategory
            title="Poolside Tiles"
            imageUrl="https://picsum.photos/200/306"
            description="Tiles perfect for poolsides and patios."
            icon="🏊"
          />
        </SwiperSlide>
        <SwiperSlide>
          <TileCategory
            title="Hallway Tiles"
            imageUrl="https://picsum.photos/200/307"
            description="Elegant tiles for your hallway."
            icon="🏠"
          />
        </SwiperSlide>
        <SwiperSlide>
          <TileCategory
            title="Balcony Tiles"
            imageUrl="https://picsum.photos/200/308"
            description="Stylish tiles for your balcony."
            icon="🌇"
          />
        </SwiperSlide>
        <SwiperSlide>
          <TileCategory
            title="Commercial Space Tiles"
            imageUrl="https://picsum.photos/200/309"
            description="Tiles designed for commercial spaces."
            icon="🏢"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

function TileCategory({ title, imageUrl, description, icon }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 transition-transform duration-300 transform hover:scale-105">
      <div className="flex items-center justify-center mb-4">
        <div className="text-4xl text-gray-800">{icon}</div>
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-32 object-cover rounded mb-4"
      />
      <a
        href="#"
        className="block mt-4 text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out"
      >
        Explore Now
      </a>
    </div>
  );
}

export default TTileCategory;
