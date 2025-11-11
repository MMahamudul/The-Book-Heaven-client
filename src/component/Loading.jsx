import React from 'react';

const Loading = () => {
    return (
   <div className="flex justify-center items-center h-screen">
  {/* <span className="loading loading-spinner text-accent w-50 h-50 "></span> */}
  <div className="w-70 h-70 border-4 border-accent border-t-transparent rounded-full animate-spin"></div>
  


</div>


    );
};

export default Loading;