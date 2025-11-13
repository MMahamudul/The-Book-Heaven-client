import React, { useState, useEffect, useContext } from "react";
import useAxios from "../hooks/useAxios";
import { Link, useParams } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const BookDetails = () => {
  const instance = useAxios();
  const { user } = useContext(AuthContext);
  const { id } = useParams();

  const [detail, setDetail] = useState({});
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");


  useEffect(() => {
    instance
      .get(`/book-details/${id}`)
      .then((res) => setDetail(res.data))
      .catch((err) => console.log(err));
  }, [id, instance]);

  
  useEffect(() => {
    instance
      .get(`/comments?bookId=${id}`)
      .then((res) => setComments(res.data))
      .catch((err) => console.log(err));
  }, [id, instance]);

 
  const handleComment = async (e) => {
    e.preventDefault();
    if (!commentText.trim()) {
      Swal.fire({ title: "Please enter a comment!", icon: "warning" });
      return;
    }

    const form = {
      comment: commentText,
      userName: user?.displayName || "Anonymous",
      coverImage: user?.photoURL || "",
      bookId: id,
      created_at: new Date(),
    };

    try {
      const { data } = await instance.post("/comments", form);

      if (data._id) {
        Swal.fire({
          title: "Comment Posted Successfully!",
          icon: "success",
          timer: 1200,
          showConfirmButton: false,
        });

        setComments((prev) => [data, ...prev]);
        setCommentText("");
      }
    } catch (err) {
      console.error(err);
      Swal.fire({ title: "Error posting comment", icon: "error" });
    }
  };

  return (
    <div className="min-h-screen bg-base-100 flex items-center justify-center py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl w-full bg-white shadow-xl rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        
        <div className="relative w-full h-80 md:h-auto">
          <img
            src={detail.coverImage}
            alt={detail.title}
            className="object-cover w-full h-full p-6 transition-transform duration-300 hover:scale-105"
          />
        </div>

        
        <div className="p-6 md:p-8 flex flex-col justify-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-accent mb-2">{detail.title}</h1>
          <p className="text-gray-600 text-sm mb-4">
            by <span className="font-semibold text-gray-800">{detail.author}</span>
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            <span className="badge badge-accent text-white">{detail.genre}</span>
            <span className="badge badge-outline">{detail.rating}</span>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4 sm:mb-6">{detail.summary}</p>

          <div className="divider my-4"></div>

          <div className="space-y-2 text-sm text-gray-600 mb-4 sm:mb-6">
            <p>
              <span className="font-semibold text-gray-800">Added by:</span> {detail.userEmail}
            </p>
            <p>
              <span className="font-semibold text-gray-800">Added on:</span>{" "}
              {new Date(detail.created_at).toLocaleDateString()}
            </p>
          </div>

          
          <div className="mb-4 sm:mb-6">
            <h2 className="font-semibold text-lg text-accent mb-2">
              Leave your comment here
            </h2>

            <form onSubmit={handleComment} className="flex flex-col sm:flex-row gap-2 items-start sm:items-center mb-4">
              <input
                type="text"
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                placeholder="Write a comment..."
                className="input input-accent w-full sm:flex-1"
              />
              <button type="submit" className="btn btn-outline btn-accent py-2 rounded-xl w-full sm:w-auto">
                Submit
              </button>
            </form>

            
            <div className="space-y-3 max-h-64 overflow-y-auto">
              {comments.length === 0 && (
                <p className="text-gray-500">No comments yet.</p>
              )}

              {comments.map((c) => (
                <div
                  key={c._id}
                  className="flex gap-3 items-start bg-gray-50 p-3 rounded-lg shadow-sm"
                >
                  <img
                    src={c.coverImage || "/default-avatar.png"}
                    alt={c.userName}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-gray-800">{c.userName}</p>
                    <p className="text-gray-600 text-sm">{c.comment}</p>
                    <span className="text-gray-400 text-xs">
                      {new Date(c.created_at).toLocaleString()}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Link to="/" className="btn btn-outline btn-accent px-6 mt-4 self-start">
            Go Back Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
