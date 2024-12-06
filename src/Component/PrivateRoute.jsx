import React, { useContext } from 'react';
import { AuthContex } from './AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from './Loading';

const PrivateRoute = ({children}) => {


    const {user,loading}=useContext(AuthContex);
    const loaction=useLocation();

    if(loading)
    {
        return <Loading></Loading>
    }
    if(user && user?.email)
    {
        return children;
    }
    return <Navigate state={loaction.pathname} to='/login' > </Navigate>
    return (
        <div>
            
        </div>
    );
};

export default PrivateRoute;