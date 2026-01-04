import React from "react";

const WeeklyBest = () => {
  const book = {
    title: "Project Hail Mary",
    author: "Andy Weir",
    description:
      `An epic tale of survival and discovery in space. A lone astronaut must save humanity and uncover the mysteries of the cosmos.Project Hail Mary is a science fiction novel by Andy Weir , 
      published in 2021.The main character is Ryland Grace, the sole survivor of a desperate attempt to save humanity and Earth.In the book, Grace and an alien named Stone strive to save the solar system from an astrophagous parasite. 
      The book is being adapted into a film, the rights to which were purchased by Metro -Goldwyn-Mayer for three million dollars.
      Project Hail Mary received generally positive reviews, and it was a finalist for the 2022 Hugo Award for Best Novel.
      The unabridged audiobook was read by Ray Porter and won the 2022 Audie Award for Audiobook of the Year.
      The book was adapted into a film starring Ryan Gosling and Sandra Hüller, with Drew Goddard writing 
      (his second Andy Weir adaptation) and Phil Lord and Christopher Miller directing.It is scheduled for release on March 20, 2026.
      
      `,
    img: "https://i.ibb.co/KJBYFs9/Hail-Mary.jpg",
    language: "English",
    genre: "Science Fiction",
    publisher: "Ballantine Books",
    year: 2021,
  };

  return (
    <section className="bg-white my-20 ">
      <div className="max-w-8xl mx-auto grid md:grid-cols-2 gap-5 items-center">
        <div className="">
          <img
            src={book.img}
            alt={book.title}
            className="w-180 h-200 transform hover:scale-105 transition duration-300"
          />
        </div>
        <div>
          <h2 className="text-5xl font-bold mb-4 text-blue-900">Book of the Week</h2>
          <h3 className="text-3xl font-semibold text-accent mb-2">{book.title}</h3>
          <p className="text-blue-800 font-bold mb-4">by {book.author}</p>
          <p className="text-blue-500 font-bold mb-4">Language: {book.language}</p>
          <p className="text-blue-500 font-bold mb-4">Genre: {book.genre}</p>
          <p className="text-blue-500 font-bold mb-4">Publisher: {book.publisher}</p>
          <p className="text-blue-500 font-bold mb-4">Published Year: {book.year}</p>

          	
	
          <p className="text-gray-700 text-lg leading-relaxed mb-6 text-justify"><span className="font-bold text-blue-500">Summary: </span><br />{book.description}</p>
         
        </div>
      </div>
    </section>
  );
};

export default WeeklyBest;



