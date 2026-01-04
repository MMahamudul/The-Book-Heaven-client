import React from 'react';
import Banner from '../component/Banner';
import WeeklyBest from '../component/WeeklyBest';
import TopRatedBooks from '../component/TopRatedBooks';
import LatestBooks from '../component/LatestBooks';
import Newsletter from '../component/Newsletter';
import CTA from '../component/CTA';
import FAQ from '../component/FAQ';
import Highlights from '../component/Highlights';
import Testimonial from '../component/Testimonial';


const Home = () => {
 
    
    
    return (
      
        <div className='min-h-screen w-8xl mx-auto'>
            
            <Banner></Banner>
            <LatestBooks></LatestBooks>
            <WeeklyBest></WeeklyBest>
            <TopRatedBooks></TopRatedBooks>
            <Newsletter></Newsletter>
            <Highlights></Highlights>
            <Testimonial></Testimonial>
            <CTA></CTA>
            <FAQ></FAQ>
            
        </div>
       
    );
};

export default Home;