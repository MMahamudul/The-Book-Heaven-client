import React from "react";
import useAxios from "../hooks/useAxios";

const AddBook = () => {
    const instance = useAxios();

    const handleAddBook = (e) =>{
        e.preventDefault();

        const title = e.target.title.value;
        const author = e.target.author.value;
        const genre = e.target.genre.value;
        const rating = e.target.rating.value;
        const summary = e.target.summary.value;
        const photo = e.target.photo.value;
        const name = e.target.name.value;
        const email = e.target.email.value;

        const newBook = {title, author, genre, rating, summary, name , email, photo}

       /*  console.log(title, author, genre, rating, summary, name , email, photo) */

       instance.post('/add-book', newBook)
       .then(data => console.log(data.data))

    }



  return (
    <div className="min-h-screen bg-base-100 flex items-center justify-center p-6">
      <div className="card w-full max-w-2xl shadow-2xl bg-base-200 border border-accent/40">
        <div className="card-body">
          <h2 className="text-3xl font-bold text-center text-accent mb-6">
            Add a New Book
          </h2>

          <form onSubmit={handleAddBook} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Title */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold my-2">Title</span>
              </label>
              <input
                type="text"
                name= 'title'
                placeholder="Name of the Book"
                className="input input-bordered border-2 border-accent/60 w-full focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent"
                required
              />
            </div>

            {/* Author */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold my-2">Author</span>
              </label>
              <input
                type="text"
                name= 'author'
                placeholder="Author name"
                className="input input-bordered border-2 border-accent/60 w-full focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent"
                required
              />
            </div>

            {/* Genre */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold my-2">Genre</span>
              </label>
              <input
                type="text"
                name= 'genre'
                placeholder="e.g., Fiction, Fantasy, Non-Fiction"
                className="input input-bordered border-2 border-accent/70 w-full focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent"
                required
              />
            </div>

            {/* Rating */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold my-2">Rating</span>
              </label>
              <input
                type="number"
                name= 'rating'
                step="0.1"
                placeholder="1–5"
                className="input input-bordered border-2 border-accent/70 w-full focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent"
                required
              />
            </div>

            {/* Summary */}
            <div className="form-control md:col-span-2">
              <label className="label">
                <span className="label-text font-bold mr-2">Summary</span>
              </label>
              <textarea
                placeholder="Write a short summary of the book..."
                name= 'summary'
                className="textarea textarea-bordered border-2 border-accent/70 h-28 focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent"
                required
              ></textarea>
            </div>

            {/* Cover Image */}
            <div className="form-control md:col-span-2">
              <label className="label">
                <span className="label-text font-bold my-2">Cover Image URL</span>
              </label>
              <input
                type="text"
                name= 'photo'
                placeholder="https://example.com/image.jpg"
                className="input input-bordered border-2 border-accent/70 w-full focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent"
                required
              />
            </div>

            {/* User Email */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold my-2">User Email</span>
              </label>
              <input
                type="email"
                name= 'email'
                placeholder="example@email.com"
                className="input input-bordered border-2 border-accent/70 w-full focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent"
                
              />
            </div>

            {/* User Name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold my-2">User Name</span>
              </label>
              <input
                type="text"
                name= 'name'
                placeholder="Added by..."
                className="input input-bordered border-2 border-accent/70 w-full focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent"
              />
            </div>

            {/* Submit Button */}
            <div className="form-control md:col-span-2 mt-4">
              <button className="btn btn-accent w-full text-lg font-semibold hover:scale-105 transition-transform duration-200">
                Add Book
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBook;
