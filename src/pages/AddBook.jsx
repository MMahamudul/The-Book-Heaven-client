import React from "react";

const AddBook = () => {
  return (
    <div className="min-h-screen bg-base-100 flex items-center justify-center p-6">
      <div className="card w-full max-w-2xl shadow-2xl bg-base-200 border border-accent/40">
        <div className="card-body">
          <h2 className="text-3xl font-bold text-center text-accent mb-6">
            Add a New Book
          </h2>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Title */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold my-2">Title</span>
              </label>
              <input
                type="text"
                placeholder="Name of the Book"
                className="input input-bordered border-2 border-accent/60 w-full focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent"
              />
            </div>

            {/* Author */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold my-2">Author</span>
              </label>
              <input
                type="text"
                placeholder="Author name"
                className="input input-bordered border-2 border-accent/60 w-full focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent"
              />
            </div>

            {/* Genre */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold my-2">Genre</span>
              </label>
              <input
                type="text"
                placeholder="e.g., Fiction, Fantasy, Non-Fiction"
                className="input input-bordered border-2 border-accent/70 w-full focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent"
              />
            </div>

            {/* Rating */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold my-2">Rating</span>
              </label>
              <input
                type="number"
                step="0.1"
                placeholder="1–5"
                className="input input-bordered border-2 border-accent/70 w-full focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent"
              />
            </div>

            {/* Summary */}
            <div className="form-control md:col-span-2">
              <label className="label">
                <span className="label-text font-bold mr-2">Summary</span>
              </label>
              <textarea
                placeholder="Write a short summary of the book..."
                className="textarea textarea-bordered border-2 border-accent/70 h-28 focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent"
              ></textarea>
            </div>

            {/* Cover Image */}
            <div className="form-control md:col-span-2">
              <label className="label">
                <span className="label-text font-bold my-2">Cover Image URL</span>
              </label>
              <input
                type="url"
                placeholder="https://example.com/image.jpg"
                className="input input-bordered border-2 border-accent/70 w-full focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent"
              />
            </div>

            {/* User Email */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold my-2">User Email</span>
              </label>
              <input
                type="email"
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
