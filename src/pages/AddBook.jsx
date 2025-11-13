import React, { useContext } from "react";
import useAxios from "../hooks/useAxios";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router"; 

const AddBook = () => {
  const navigate = useNavigate();
  const instance = useAxios();
  const { user } = useContext(AuthContext);

  const handleAddBook = (e) => {
    e.preventDefault();

    const newBook = {
      title: e.target.title.value,
      author: e.target.author.value,
      genre: e.target.genre.value,
      rating: e.target.rating.value,
      summary: e.target.summary.value,
      coverImage: e.target.photo.value,
      name: e.target.name.value,
      userName: user.displayName,
      userEmail: user.email,
      created_at: new Date(),
    };

    instance.post("/add-book", newBook).then((data) => {
      const result = data.data;
      if (result.insertedId) {
        Swal.fire({
          title: "Book Added Successfully!",
          icon: "success",
          draggable: true,
        });
      }
      navigate("/all-books");
    });
  };

  return (
    <div className="min-h-screen bg-base-100 flex items-center justify-center px-4 py-10 sm:px-6 lg:px-8">
      <div className="card w-full max-w-3xl shadow-xl bg-base-200 border border-accent/30 rounded-2xl">
        <div className="card-body p-6 sm:p-10">
         
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-accent mb-6">
            Add a New Book
          </h2>

         
          <form
            onSubmit={handleAddBook}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
           
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold my-2">Title</span>
              </label>
              <input
                type="text"
                name="title"
                placeholder="Book title"
                className="input input-bordered border-2 border-accent/60 w-full focus:outline-none focus:ring-2 focus:ring-accent/60"
                required
              />
            </div>

            
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold my-2">Author</span>
              </label>
              <input
                type="text"
                name="author"
                placeholder="Author name"
                className="input input-bordered border-2 border-accent/60 w-full focus:outline-none focus:ring-2 focus:ring-accent/60"
                required
              />
            </div>

           
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold my-2">Genre</span>
              </label>
              <input
                type="text"
                name="genre"
                placeholder="e.g., Fantasy, Thriller"
                className="input input-bordered border-2 border-accent/60 w-full focus:outline-none focus:ring-2 focus:ring-accent/60"
                required
              />
            </div>

            
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold my-2">Rating</span>
              </label>
              <input
                type="number"
                name="rating"
                min="1"
                max="5"
                step="0.1"
                placeholder="1–5"
                className="input input-bordered border-2 border-accent/60 w-full focus:outline-none focus:ring-2 focus:ring-accent/60"
                required
              />
            </div>

            
            <div className="form-control sm:col-span-2">
              <label className="label">
                <span className="label-text font-bold my-2">Summary</span>
              </label>
              <textarea
                name="summary"
                placeholder="Write a short summary..."
                className="textarea textarea-bordered border-2 border-accent/60 h-28 sm:h-32 w-full focus:outline-none focus:ring-2 focus:ring-accent/60"
                required
              ></textarea>
            </div>

           
            <div className="form-control sm:col-span-2">
              <label className="label">
                <span className="label-text font-bold my-2">Cover Image URL</span>
              </label>
              <input
                type="url"
                name="photo"
                placeholder="https://example.com/cover.jpg"
                className="input input-bordered border-2 border-accent/60 w-full focus:outline-none focus:ring-2 focus:ring-accent/60"
              />
            </div>

           
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold my-2">User Email</span>
              </label>
              <input
                type="email"
                defaultValue={user?.email}
                readOnly
                className="input input-bordered border-2 border-accent/60 w-full bg-gray-50 cursor-not-allowed text-gray-500"
              />
            </div>

            
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold my-2">User Name</span>
              </label>
              <input
                type="text"
                defaultValue={user?.displayName}
                readOnly
                className="input input-bordered border-2 border-accent/60 w-full bg-gray-50 cursor-not-allowed text-gray-500"
              />
            </div>

           
            <div className="form-control sm:col-span-2 mt-2">
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
