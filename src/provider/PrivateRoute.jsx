import React from 'react';
import { use } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate } from 'react-router';

const PrivateRoute = ({children}) => {
    const {user} = use(AuthContext);
     if(user){
        return children

        }else{
            return <Navigate to='/auth/signin'></Navigate>
        }
    
};

export default PrivateRoute;