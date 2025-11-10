import React from "react";

const BookDetails = () => {
  return (
    <div className="min-h-screen bg-base-100 flex items-center justify-center py-12 px-4">
      <div className="max-w-5xl w-full bg-white shadow-xl rounded-2xl overflow-hidden grid md:grid-cols-2">
       
        <div className="relative">
          <img
            src="https://i.ibb.co/Q3D3XVTw/B-90-removebg-preview.png"
            alt="Book Cover"
            className="object-cover w-full h-full p-6 transition-transform duration-300 hover:scale-105"
          />
        </div>

       
        <div className="p-8 flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-accent mb-2">
            The Fine Print
          </h1>
          <p className="text-gray-600 text-sm mb-4">
            by <span className="font-semibold text-gray-800">Lauren Asher</span>
          </p>

          <div className="flex items-center gap-3 mb-4">
            <span className="badge badge-accent text-white">Romance</span>
            <span className="badge badge-outline">⭐ 4.7 / 5</span>
          </div>

          <p className="text-gray-700 leading-relaxed mb-6">
            “The Fine Print” is a charming and emotional story about ambition,
            dreams, and falling for someone who challenges everything you
            thought you wanted. A heartfelt romance set against the backdrop of
            a dream world filled with magic, creativity, and self-discovery.
          </p>

          <div className="divider my-4"></div>

          <div className="space-y-3 text-sm text-gray-600 mb-6">
            <p>
              <span className="font-semibold text-gray-800">Genre:</span>{" "}
              Romance
            </p>
            <p>
              <span className="font-semibold text-gray-800">Published:</span>{" "}
              July 2022
            </p>
            <p>
              <span className="font-semibold text-gray-800">Language:</span>{" "}
              English
            </p>
            <p>
              <span className="font-semibold text-gray-800">ISBN:</span>{" "}
              978-1-23456-789-0
            </p>
          </div>

        
          <div className="flex gap-4">
            <button className="btn btn-accent text-white px-6">
              Buy Now
            </button>
            <button className="btn btn-outline btn-accent px-6">
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
