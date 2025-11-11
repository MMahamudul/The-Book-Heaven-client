import React from 'react';
import { use } from 'react';
import { AuthContext } from './../provider/AuthProvider';
import useAxios from './../hooks/useAxios';
import { useState } from 'react';
import { useEffect } from 'react';
import Loading from '../component/Loading';
import { Link } from 'react-router';


const MyBooks = () => {
    const {user, loading, setLoading} = use(AuthContext);
    const instances = useAxios();
    const [myBooks, setMyBooks] = useState([]);
    

    useEffect(()=>{
        instances.get(`/my-books?email=${user.email}`)
        .then(res =>{
            setMyBooks(res.data);
            setLoading(false)
        }).catch(error => console.log(error))

    }, [])

    if(loading){
        return <Loading></Loading>
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
            <Link to={`/update-book/${book._id}`} state={{ book }} className="btn-ghost btn-md btn btn-outline btn-accent px-6 py-3 mx-10 rounded-lg text-md">
  UPDATE
</Link>
            
          </th>
          <th>
            <Link to={`/delete-book/${book._id}`} className="btn-ghost btn-md btn btn-outline btn-accent px-6 py-3  rounded-lg text-md"> DELETE</Link>
          </th>
        </tr>
      ))}
    </tbody>
  </table>
</div>
    );
};

export default MyBooks;