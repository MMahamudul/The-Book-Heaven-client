import React from 'react';
import useAxios from '../hooks/useAxios';
import { useState } from 'react';
import { useEffect } from 'react';

const LatestBooks = () => {
     const instances = useAxios();
        const [latestBooks, setLatestBooks] = useState([])
    
        useEffect(()=>{
            instances.get('/latest-book')
            .then(res =>setLatestBooks(res.data))
            .catch(error =>console.log(error))
    
        }, [])
    return (
        <div>
            <h1 className='text-3xl font-bold text-accent my-4 text-center'>Latest Books</h1>
            
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-5 '>
              
                {latestBooks.map(book => 
                
                
          <div 
          className="bg-green-50 shadow-lg  overflow-hidden hover:shadow-xl 
          transition-shadow duration-300 flex flex-col justify-center items-center w-[400px] h-[500px]">
      <div className='p-5'>
        <img
        src={book.coverImage}
        alt='book'
        className="h-60 w-45"
      />
      </div>
      <div className="p-4 flex flex-col justify-between grow">
        <div>
          <h2 className="text-xl font-bold text-gray-800 mb-1">{book.title}</h2>
          <p className="text-sm text-gray-500 mb-2">by {book.author}</p>
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm bg-green-200 text-green-900 px-2 py-1 rounded-lg">{book.genre}</span>
            <span className="text-yellow-500 font-semibold">{book.rating}</span>
          </div>
          <p className="text-gray-700 text-sm line-clamp-3">{book.summary}</p>
        </div>
        <div className="mt-4 text-xs text-gray-400 pt-2 flex justify-between">
          <span>{book.userEmail}</span>
          
        </div>
      </div>
    </div>)}
            </div>
            
        </div>
    );
};

export default LatestBooks;