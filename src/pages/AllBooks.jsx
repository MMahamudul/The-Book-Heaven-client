import React, { useState, useEffect } from 'react';
import useAxios from '../hooks/useAxios';
import { Link } from 'react-router';

const AllBooks = () => {
  const [books, setBooks] = useState([]);
  const [sortOrder, setSortOrder] = useState(''); // '' | 'asc' | 'desc'
  const instance = useAxios();

  // Fetch books from server
  useEffect(() => {
    instance.get('/all-books')
      .then(res => setBooks(res.data))
      .catch(error => console.log(error));
  }, [instance]);

  // Sort books based on selected order
  const sortedBooks = [...books].sort((a, b) => {
    if (sortOrder === 'asc') return a.rating - b.rating;
    if (sortOrder === 'desc') return b.rating - a.rating;
    return 0;
  });

  return (
    <div>
      <h1 className='text-3xl font-bold text-accent my-4 text-center'>
        All Books
      </h1>

      {/* Sort Dropdown */}
      <div className="flex justify-end mb-4 px-6">
        <select
          className="select select-bordered select-accent w-48"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="">Sort by Rating</option>
          <option value="desc">High to Low</option>
          <option value="asc">Low to High</option>
        </select>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
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
              <tr key={book._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="h-20 w-16 rounded-md overflow-hidden">
                        <img src={book.coverImage} alt={book.title} />
                      </div>
                    </div>
                    <div>
                      <div className="text-lg font-bold">{book.title}</div>
                      <div className="text-sm opacity-80">{book.author}</div>
                    </div>
                  </div>
                </td>
                <td className="font-semibold">{book.genre}</td>
                <td className="font-semibold">{book.rating}</td>
                <th>
                  <Link
                    to={`/book-details/${book._id}`}
                    className="btn btn-outline btn-accent btn-sm px-4 rounded-lg"
                  >
                    View Details
                  </Link>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllBooks;
