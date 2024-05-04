import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { MyContext } from '../Context/Context';
import Spinner from '../Components/Spinner/Spinner';
const PrivateRoute = ({ children }) => {

    const location = useLocation()
    const { user, loader } = useContext(MyContext)
    if (loader) {
        return <>
            <Spinner></Spinner>
        </>
    }


    if(!user){
        return <Navigate to='/login' state={{from : location}}></Navigate>
    }

    return children
};

export default PrivateRoute;