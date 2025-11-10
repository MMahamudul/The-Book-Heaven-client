import React from 'react';
import useAxios from '../hooks/useAxios';
import { useState } from 'react';
import { useEffect } from 'react';

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
                <div className="h-40 w-35">
                  <img
                    src={book.coverImage}
                    alt={book.title}
                  />
                </div>
              </div>
              <div>
                <div className="font-bold">{book.title}</div>
                <div className="text-sm opacity-50">{book.author}</div>
              </div>
            </div>
          </td>
          <td>
            {book.genre}
          </td>
          <td>{book.rating}</td>
          <th>
            <button className="btn-ghost btn-md btn btn-outline btn-accent px-6 py-3 rounded-lg">View Details</button>
          </th>
        </tr>
      ))}
    </tbody>
  </table>
</div>

            
  
        
    );
};

export default AllBooks;