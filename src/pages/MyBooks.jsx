import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "./../provider/AuthProvider";
import useAxios from "./../hooks/useAxios";
import Loading from "../component/Loading";
import { Link } from "react-router";
import Swal from "sweetalert2";

const MyBooks = () => {
  const { user, loading, setLoading } = useContext(AuthContext);
  const instances = useAxios();
  const [myBooks, setMyBooks] = useState([]);

  useEffect(() => {
    if (!user) return;
    instances
      .get(`/my-books?email=${user.email}`)
      .then((res) => {
        setMyBooks(res.data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, [user]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await instances.delete(`/delete-book/${id}`);
          if (res.data.deletedCount > 0) {
            setMyBooks(myBooks.filter((book) => book._id !== id));
            Swal.fire("Deleted!", "Your book has been deleted.", "success");
          } else {
            Swal.fire("Error", "Failed to delete the book!", "error");
          }
        } catch (error) {
          console.error(error);
          Swal.fire("Error", "Something went wrong!", "error");
        }
      }
    });
  };

  if (loading) return <Loading />;

  return (
    <div className="min-h-screen px-4 py-8 max-w-7xl mx-auto">
      
      <div className="hidden md:block overflow-x-auto rounded-lg shadow">
        <table className="table w-full">
          <thead className="">
            <tr>
              <th>Sl No.</th>
              <th>Book Name</th>
              <th>Genre</th>
              <th>Rating</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {myBooks.map((book, index) => (
              <tr
                key={book._id}
                className="hover:bg-gray-50 border-b border-gray-200"
              >
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
                <td>
                  <Link
                    to={`/update-book/${book._id}`}
                    state={{ book }}
                    className="btn btn-outline btn-accent btn-sm px-4 rounded-lg"
                  >
                    UPDATE
                  </Link>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(book._id)}
                    className="btn btn-outline btn-accent btn-sm px-4 rounded-lg"
                  >
                    DELETE
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      
      <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-6">
        {myBooks.map((book) => (
          <div
            key={book._id}
            className="bg-white shadow-md rounded-2xl overflow-hidden flex flex-col"
          >
            <img
              src={book.coverImage}
              alt={book.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-4 flex flex-col grow justify-between">
              <div>
                <h2 className="font-semibold text-lg">{book.title}</h2>
                <p className="text-sm text-gray-500">{book.author}</p>
                <p className="mt-1 text-sm">
                  <span className="font-semibold">Genre:</span> {book.genre}
                </p>
                <p className="text-sm">
                  <span className="font-semibold">Rating:</span> {book.rating}
                </p>
              </div>
              <div className="flex justify-between mt-4 gap-2">
                <Link
                  to={`/update-book/${book._id}`}
                  state={{ book }}
                  className="btn btn-outline btn-accent btn-sm flex-1"
                >
                  UPDATE
                </Link>
                <button
                  onClick={() => handleDelete(book._id)}
                  className="btn btn-outline btn-accent btn-sm flex-1"
                >
                  DELETE
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBooks;
