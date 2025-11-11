import React from "react";
import useAxios from "../hooks/useAxios";
import { Link, useParams } from "react-router";
import { useEffect } from "react";
import { useState } from "react";

const BookDetails = () => {
    const instance = useAxios();
    const {id} = useParams();
    const [detail, setDetail] = useState({})

    useEffect(()=>{
         instance.get(`/book-details/${id}`)
        .then(res =>setDetail(res.data))
        .catch(error=>console.log(error))



    },[id, instance])
  return (
    <div className="min-h-screen bg-base-100 flex items-center justify-center py-12 px-4">
      <div className="max-w-5xl w-full bg-white shadow-xl rounded-2xl overflow-hidden grid md:grid-cols-2">
        <div className="relative">
          <img
            src={detail.coverImage}
            alt={detail.title}
            className="object-cover w-full h-full p-6 transition-transform duration-300 hover:scale-105"
          />
        </div>

        <div className="p-8 flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-accent mb-2">{detail.title}</h1>
          <p className="text-gray-600 text-sm mb-4">
            by <span className="font-semibold text-gray-800">{detail.author}</span>
          </p>

          <div className="flex items-center gap-3 mb-4">
            <span className="badge badge-accent text-white">{detail.genre}</span>
            <span className="badge badge-outline"> {detail.rating}</span>
          </div>

          <p className="text-gray-700 leading-relaxed mb-6">{detail.summary}</p>

          <div className="divider my-4"></div>

          <div className="space-y-3 text-sm text-gray-600 mb-6">
            <p><span className="font-semibold text-gray-800">Added by:</span> {detail.userEmail}</p>
            <p><span className="font-semibold text-gray-800">Added on:</span> {new Date(detail.created_at).toLocaleDateString()}</p>
          </div>

          <div className="flex gap-4">
            {/* <Link to= {`/update-book/${detail._id}`} state={{ book: detail }} className="btn btn-accent text-white px-6">Update</Link> */}
           {/*  <Link to= {`/delete-book/${detail._id}`}  className="btn btn-outline btn-accent px-6">Remove</Link> */}
           <Link to="/" className="btn btn-outline btn-accent px-6">Go Back Home</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
