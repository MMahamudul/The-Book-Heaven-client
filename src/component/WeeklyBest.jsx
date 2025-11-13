import React from "react";

const WeeklyBest = () => {
  const book = {
    title: "Project Hail Mary",
    author: "Andy Weir",
    description:
      "An epic tale of survival and discovery in space. A lone astronaut must save humanity and uncover the mysteries of the cosmos.",
    img: "https://i.ibb.co/KJBYFs9/Hail-Mary.jpg",
  };

  return (
    <section className="bg-white my-20 ">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div className="rounded-2xl overflow-hidden shadow-md">
          <img
            src={book.img}
            alt={book.title}
            className="w-full h-80 object-cover transform hover:scale-105 transition duration-300"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-4 text-accent">Book of the Week</h2>
          <h3 className="text-2xl font-semibold mb-2">{book.title}</h3>
          <p className="text-gray-500 mb-4">by {book.author}</p>
          <p className="text-gray-700 leading-relaxed mb-6">{book.description}</p>
          <button className="px-5 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
};

export default WeeklyBest;



