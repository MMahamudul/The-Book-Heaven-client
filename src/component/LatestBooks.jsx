import React, { useState, useEffect } from 'react';
import useAxios from '../hooks/useAxios';
import Loading from '../component/Loading';

const LatestBooks = () => {
    const instances = useAxios();
    const [latestBooks, setLatestBooks] = useState([]);
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        const fetchLatestBooks = async () => {
            try {
                const res = await instances.get('/latest-book');
                console.log('API Response:', res.data); 
                
                setLatestBooks(Array.isArray(res.data) ? res.data : res.data.books || []);
            } catch (error) {
                console.error('Error fetching latest books:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchLatestBooks();
    }, [instances]);

    if (loading) return <Loading />;

    return (
        <div>
            <h1 className='text-5xl font-bold text-blue-900 my-6 text-center'>Latest Books</h1>
            
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 my-5'>
                {(latestBooks || []).map(book => (
                    <div 
                        key={book._id}
                        className="bg-green-50 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col justify-center items-center w-[300px] h-[450px]"
                    >
                        <div className='p-5'>
                            <img
                                src={book.coverImage}
                                alt={book.title}
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
                                {/* <p className="text-gray-700 text-sm line-clamp-3">{book.summary}</p> */}
                            </div>
                            <div className="mt-2 text-xs text-gray-400 pt-2 flex justify-between">
                                <span>{book.userEmail}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LatestBooks;
