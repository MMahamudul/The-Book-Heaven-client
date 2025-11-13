import React from 'react';
import MyContainer from '../component/MyContainer';
import Navbar from '../component/Navbar/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../pages/Footer';
import Loading from "../component/Loading"; 

const MainLayout = () => {
    const {state} = useNavigation()
    return (
    
        <MyContainer>
            <Navbar></Navbar>
           {state == "loading" ? <Loading></Loading> :  <Outlet></Outlet>}
            <Footer></Footer>

        </MyContainer>

    
        
    );
};

export default MainLayout;