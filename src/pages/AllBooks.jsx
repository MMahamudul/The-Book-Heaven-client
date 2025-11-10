import React from 'react';
import useAxios from '../hooks/useAxios';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router';

const AllBooks = () => {
    const [books, setBooks] = useState([]);
    const instance = useAxios();
    useEffect(()=>{
        instance.get('/all-books')
        .then(res =>{
            setBooks(res.data)
        }).catch(error =>console.log(error))
        

    },[instance])


    return (
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
      
      {books.map((book, index) => (
        <tr key={book._id}>
          <th>{index + 1}</th>
          <td>
            <div className="flex items-center gap-3">
              <div className="avatar">
                <div className="h-50 w-45">
                  <img
                    src={book.coverImage}
                    alt={book.title}
                  />
                </div>
              </div>
              <div>
                <div className="text-lg font-bold">{book.title}</div>
                <div className="text-sm opacity-80">{book.author}</div>
              </div>
            </div>
          </td>
          <td className="font-semibold">
            {book.genre}
          </td>
          <td className="font-semibold">{book.rating}</td>
          <th>
            <Link  className="btn-ghost btn-md btn btn-outline btn-accent px-6 py-3 rounded-lg text-md"> View Details</Link>
          </th>
        </tr>
      ))}
    </tbody>
  </table>
</div>

            
  
        
    );
};

export default AllBooks;