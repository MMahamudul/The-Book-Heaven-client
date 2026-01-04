import React from 'react';
import MyContainer from '../component/MyContainer';
import Navbar from '../component/Navbar/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../pages/Footer';
import Loading from "../component/Loading"; 

const MainLayout = () => {
    const {state} = useNavigation()
    return (
    
        <div>
            <Navbar></Navbar>
           <MyContainer>
        
             {state == "loading" ? <Loading></Loading> :  <Outlet></Outlet>}
          
            <Footer></Footer>
           </MyContainer>

        </div>

    
        
    );
};

export default MainLayout;