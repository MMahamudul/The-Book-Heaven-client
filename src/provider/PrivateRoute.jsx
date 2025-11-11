import React from 'react';
import { use } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router';
import Loading from '../component/Loading';

const PrivateRoute = ({children}) => {
    const location = useLocation();
    const {user, loading} = use(AuthContext);
    if(loading){
        return <Loading></Loading>
    }
     if(user && user?.email){
        return children

        }
        return <Navigate state={location.pathname} to='/auth/signin'></Navigate>
    
};

export default PrivateRoute;