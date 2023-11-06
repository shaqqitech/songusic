'use client'
import React, { useState } from 'react';

const Booking = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    { id: 1, name: "Concerts" },
    { id: 2, name: "Festivals" },
    { id: 3, name: "Private Events" },
    // Add more categories as needed
  ];

  return (
    <div className=" bg-gradient-to-r from-gray-900 to-gray-700 text-white px-5 py-10">
      <div className="flex flex-col items-center justify-center">
        <div className="bg-gradient-to-r from-cyan-700 to-pink-800 w-full md:w-2/3 lg:w-1/2 bg-gray-800 p-8 rounded-lg shadow-lg">
          <h1 className="text-4xl mb-6">Book a Music Event</h1>

          {/* Category Selection */}
          <div className="mb-6">
            <p className="text-xl mb-2">Choose a category:</p>
            <div className="grid grid-rows-3 grid-cols-1 md:grid-rows-1 md:grid-cols-3 gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  className={`${
                    selectedCategory === category.id
                      ? 'bg-yellow-500 text-gray-900'
                      : 'bg-gray-800 text-white'
                  } p-2 rounded-full transition-all duration-300 text-lg font-semibold`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Booking Form */}
          {selectedCategory && (
            <div className="border-2 p-6 rounded-lg">
              <h2 className="text-2xl mb-4">
                Book a {categories.find((c) => c.id === selectedCategory).name} Event
              </h2>

              <form>
                <div className="mb-4 space-y-3">
                  <label className="block text-lg mb-2">Your Name</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border rounded-md"
                    placeholder="Enter your name"
                  />
                  <label className="block text-lg mb-2">Address</label>
                  <textarea
                    type="text"
                    className="w-full px-3 py-2 border rounded-md"
                    placeholder="Enter your address"
                  />
                </div>
                <label className="block text-lg mb-2">Booking Date</label>
                  <input
                    type="date"
                    className="w-full px-3 py-2 border rounded-md text-black"
                    placeholder="Enter your name"
                  />

                {/* Add more form fields here */}
              </form>

              <button
                className="bg-blue-500 text-white py-2 px-4 rounded-md mt-6 hover:bg-blue-600 transition duration-300"
              >
                Book Now
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Booking;
