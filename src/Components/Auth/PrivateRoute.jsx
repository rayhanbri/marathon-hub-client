import React from 'react';
import AuthHook from '../Hooks/AuthHook';
import { Navigate } from 'react-router';
import Login from '../../Header/Login';
import Spinner from './Spinner';

const PrivateRoute = ({ children }) => {
    const { user,loading } = AuthHook();

    if(loading){
        return <Spinner></Spinner>
    }

    if (!user) {
        return <Navigate to='/login'></Navigate>
    }
    return children;
};

export default PrivateRoute;