import React, { useState, useEffect } from "react";
import useAxios from "../hooks/useAxios";
import { Link } from "react-router";
import Loading from "../component/Loading"; 

const AllBooks = () => {
  const [books, setBooks] = useState([]);
  const [sortOrder, setSortOrder] = useState(""); 
  const [loading, setLoading] = useState(true); 
  const instance = useAxios();

  useEffect(() => {
    instance
      .get("/all-books")
      .then((res) => {
        setBooks(res.data);
        setLoading(false); 
      })
      .catch((error) => {
        console.log(error);
        setLoading(false); 
      });
  }, [instance]);

  const sortedBooks = [...books].sort((a, b) => {
    if (sortOrder === "asc") return a.rating - b.rating;
    if (sortOrder === "desc") return b.rating - a.rating;
    return 0;
  });

  
  if (loading) return <Loading />;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-accent mb-6 text-center">
        All Books
      </h1>

      <div className="flex justify-end mb-6">
        <select
          className="select select-bordered select-accent w-48 text-sm md:text-base"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="">Sort by Rating</option>
          <option value="desc">High to Low</option>
          <option value="asc">Low to High</option>
        </select>
      </div>

      <div className="hidden md:block overflow-x-auto rounded-lg shadow-sm">
        <table className="table w-full">
          <thead className=" text-accent">
            <tr>
              <th>Sl No.</th>
              <th>Book Name</th>
              <th>Genre</th>
              <th>Rating</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {sortedBooks.map((book, index) => (
              <tr
                key={book._id}
                className="hover:bg-gray-50 border-b border-gray-100"
              >
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="h-20 w-16 rounded-md overflow-hidden">
                        <img
                          src={book.coverImage}
                          alt={book.title}
                          className="object-cover w-full h-full"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="text-lg font-semibold">{book.title}</div>
                      <div className="text-sm text-gray-500">
                        {book.author}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="font-semibold">{book.genre}</td>
                <td className="font-semibold">{book.rating}</td>
                <td>
                  <Link
                    to={`/book-details/${book._id}`}
                    className="btn btn-outline btn-accent btn-sm rounded-lg"
                  >
                    View Details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
        {sortedBooks.map((book) => (
          <div
            key={book._id}
            className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col"
          >
            <img
              src={book.coverImage}
              alt={book.title}
              className="w-full h-60 object-cover"
            />
            <div className="p-4 flex flex-col grow justify-between">
              <div>
                <h2 className="font-semibold text-lg text-gray-900">
                  {book.title}
                </h2>
                <p className="text-sm text-gray-500">{book.author}</p>
                <p className="mt-2 text-gray-700 text-sm">
                  <span className="font-semibold">Genre:</span> {book.genre}
                </p>
                <p className="text-gray-700 text-sm">
                  <span className="font-semibold">Rating:</span> {book.rating}
                </p>
              </div>
              <Link
                to={`/book-details/${book._id}`}
                className="btn btn-outline btn-accent btn-sm mt-4 rounded-lg self-start"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllBooks;
