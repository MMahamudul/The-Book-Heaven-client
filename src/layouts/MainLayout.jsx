import React from 'react';
import MyContainer from '../component/MyContainer';
import Navbar from '../component/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../pages/Footer';

const MainLayout = () => {
    return (
    
        <MyContainer>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>

        </MyContainer>

    
        
    );
};

export default MainLayout;