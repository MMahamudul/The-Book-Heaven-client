import React, { use, useEffect, useState } from "react";
import { AuthContext } from "./../provider/AuthProvider";
import useAxios from "./../hooks/useAxios";
import Loading from "../component/Loading";
import { Link } from "react-router";
import Swal from "sweetalert2";

const MyBooks = () => {
  const { user, loading, setLoading } = use(AuthContext);
  const instances = useAxios();
  const [myBooks, setMyBooks] = useState([]);

  useEffect(() => {
    instances
      .get(`/my-books?email=${user.email}`)
      .then((res) => {
        setMyBooks(res.data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  // ✅ Handle Delete with Axios inside SweetAlert
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
            // Remove the deleted book from UI
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

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="overflow-x-auto min-h-screen">
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
          {myBooks.map((book, index) => (
            <tr key={book._id}>
              <th>{index + 1}</th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="h-50 w-45">
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
                  to={`/update-book/${book._id}`}
                  state={{ book }}
                  className="btn-ghost btn-md btn btn-outline btn-accent px-6 py-3 mx-10 rounded-lg text-md"
                >
                  UPDATE
                </Link>
              </th>
              <th>
                <button
                  onClick={() => handleDelete(book._id)}
                  className="btn-ghost btn-md btn btn-outline btn-accent px-6 py-3 rounded-lg text-md"
                >
                  DELETE
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyBooks;
