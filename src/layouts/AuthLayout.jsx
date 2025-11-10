import React from 'react';
import MyContainer from '../component/MyContainer';
import Footer from '../pages/Footer';
import { Outlet } from 'react-router';
import Navbar from '../component/Navbar/Navbar';

const AuthLayout = () => {
    return (
         <MyContainer>
            <div className='min-h-screen'>
                <header>
                <Navbar></Navbar>
                </header>
                <main>
                    <Outlet></Outlet>
                </main>
                <footer>
                    <Footer></Footer>
                </footer>

            </div>
            
        </MyContainer>
    );
};

export default AuthLayout;