import React from 'react';

const reviewsData = [
  {
    name: 'Laavanya Ramesh',
    rating: 5,
    review: 'Very Good.',
    date: 'October 1, 2024',
    userImage: 'path/to/user1.jpg' // Add the path to the user profile image
  },
  {
    name: 'Ishwarya Raja',
    rating: 4,
    review: 'Good product.',
    date: 'September 15, 2024',
    userImage: 'path/to/user2.jpg' // Add the path to the user profile image
  },
  {
    name: 'Kamal Nath',
    rating: 5,
    review: 'Best collection of quality branded tiles in Coimbatore. Various brands/models to choose, competitive prices, very good service.',
    date: 'September 10, 2024',
    userImage: 'path/to/user3.jpg' // Add the path to the user profile image
  },
  {
    name: 'Rajesh Kumar',
    rating: 4,
    review: 'Great service and a fantastic selection of tiles.',
    date: 'October 3, 2024',
    userImage: 'path/to/user4.jpg' // Add the path to the user profile image
  },
  {
    name: 'Anjali Verma',
    rating: 5,
    review: 'Absolutely love my new kitchen tiles! They are stunning.',
    date: 'October 5, 2024',
    userImage: 'path/to/user5.jpg' // Add the path to the user profile image
  },
  {
    name: 'Sunil Nair',
    rating: 4,
    review: 'Very professional and helpful staff. Highly recommend.',
    date: 'October 7, 2024',
    userImage: 'path/to/user6.jpg' // Add the path to the user profile image
  },
  {
    name: 'Priya Singh',
    rating: 5,
    review: 'The best place for tiles in Coimbatore. Will come back for sure!',
    date: 'October 10, 2024',
    userImage: 'path/to/user7.jpg' // Add the path to the user profile image
  },
  {
    name: 'Arun Patel',
    rating: 5,
    review: 'Exceptional quality and beautiful designs. Very happy with my purchase.',
    date: 'October 12, 2024',
    userImage: 'path/to/user8.jpg' // Add the path to the user profile image
  }
];

const Reviews = () => {
  return (
    <div className="p-6 bg-gradient-to-r from-blue-100 to-blue-300 min-h-screen flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Customer Reviews</h2>
      <div className="flex flex-wrap gap-6 justify-center">
        {reviewsData.map((review, index) => (
          <div
            key={index}
            className="w-80 p-4 bg-white border border-gray-300 rounded-lg shadow-lg transition-transform transform hover:scale-105"
          >
            <div className="flex items-center mb-2">
              <img src={review.userImage} alt={review.name} className="w-12 h-12 rounded-full mr-3" />
              <div className="flex-grow">
                <h3 className="text-lg font-semibold text-blue-800">{review.name}</h3>
                <span className="text-gray-500 text-sm">{review.date}</span>
              </div>
            </div>
            <p className="text-yellow-500 mb-2">{'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}</p>
            <p className="text-gray-700 mb-2">{review.review}</p>
            <button className="mt-2 bg-blue-500 text-white py-1 px-2 rounded">View More</button>
          </div>
        ))}
      </div>
      {/* Display the total reviews count */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold text-gray-800">Total Reviews: {reviewsData.length}</h3>
      </div>
    </div>
  );
};

export default Reviews;
