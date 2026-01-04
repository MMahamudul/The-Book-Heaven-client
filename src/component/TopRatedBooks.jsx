import React from "react";

const TopRatedBooks = () => {
  const topRatedBooks = [
    {
      title: "The Silent Patient",
      author: "Alex Michaelides",
      img: "https://i.ibb.co/GfkPfQxy/Silent.webp",
    },
    {
      title: "Atomic Habits",
      author: "James Clear",
      img: "https://i.ibb.co/fz0VGnP2/Atomic-Habits-1.png",
    },
    {
      title: "Ocean Door",
      author: "Amisha Sathi",
      img: "https://i.ibb.co/k2n0dGC0/amish.jpg",
    },
    {
      title: "The Alchemist",
      author: "Paulo Coelho",
      img: "https://i.ibb.co/4nZB3H7T/al-chemist.jpg",
    },
  ];

  return (
    <section className="max-w-8xl mx-auto py-12">
      <h2 className="text-5xl font-bold mb-10 text-center text-blue-900">Top Rated Books</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {topRatedBooks.map((book, idx) => (
          <div
            key={idx}
            className="bg-green-50 rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition w-[300px] h-[450px]"
          >
            <div className="h-90 overflow-hidden">
              <img
                src={book.img}
                alt={book.title}
                className="w-full h-full object-cover transform hover:scale-105 transition duration-300"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg">{book.title}</h3>
              <p className="text-gray-500 text-sm mt-1">{book.author}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopRatedBooks;
