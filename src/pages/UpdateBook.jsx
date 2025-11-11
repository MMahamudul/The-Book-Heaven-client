import React from "react";
import Swal from "sweetalert2";
import useAxios from "../hooks/useAxios";
import { useLocation, useNavigate } from "react-router";

const UpdateBook = () => {
 
  
    const navigate= useNavigate();
     const { state } = useLocation();
      const { book } = state || {};
      console.log(book);
     const instance = useAxios();
    
   const handleUpdateBook = async (e) =>{
    e.preventDefault();
     const updatedBook = 
        {
            title: e.target.title.value,
            author: e.target.author.value,
            genre: e.target.genre.value,
            rating: e.target.rating.value,
            summary: e.target.summary.value,
            coverImage: e.target.photo.value,
            name: e.target.name.value,
            created_at: new Date(),
            

          
        }
        try {
    const result = await instance.put(`/update-book/${book._id}`, updatedBook);
    if (result.data.modifiedCount) {
        
    Swal.fire("Success!", "Book updated successfully!", "success");
   
     }
    } catch (err) {
  console.error(err);
  Swal.fire("Error", "Failed to update book!", "error");
    }
     navigate('/my-books')

   }



  return (
    <div className="min-h-screen bg-base-100 flex items-center justify-center p-6">
      <div className="card w-full max-w-2xl shadow-2xl bg-base-200 border border-accent/40">
        <div className="card-body">
          <h2 className="text-3xl font-bold text-center text-accent mb-6">
            Update the Book
          </h2>

          <form onSubmit={handleUpdateBook} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Title */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold my-2">Title</span>
              </label>
              <input
                type="text"
                name= 'title'
                defaultValue={book?.title}
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
                defaultValue={book?.author}
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
                defaultValue={book?.genre}
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
                defaultValue={book?.rating}
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
                defaultValue={book?.summary}
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
                type="url"
                name="photo"
                 defaultValue={book?.coverImage}
                placeholder="https://example.com/image.jpg"
                className="input input-bordered border-2 border-accent/70 w-full focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent"
                
              />
            </div>

            {/* Submit Button */}
            <div className="form-control md:col-span-2 mt-4">
              <button className="btn btn-accent w-full text-lg font-semibold hover:scale-105 transition-transform duration-200">
                Update Book
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateBook;
