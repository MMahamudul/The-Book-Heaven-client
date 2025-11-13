import React from 'react';
import Banner from '../component/Banner';
import MyContainer from '../component/MyContainer';
import WeeklyBest from '../component/WeeklyBest';
import TopRatedBooks from '../component/TopRatedBooks';
import LatestBooks from '../component/LatestBooks';


const Home = () => {
 
    
    
    return (
      
        <div className='min-h-screen w-8xl mx-auto'>
            <Banner></Banner>
            <LatestBooks></LatestBooks>
            <WeeklyBest></WeeklyBest>
            <TopRatedBooks></TopRatedBooks>
            
        </div>
       
    );
};

export default Home;