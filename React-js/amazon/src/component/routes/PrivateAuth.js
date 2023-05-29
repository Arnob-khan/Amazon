import React, { useContext } from 'react';
import { AuthContext } from '../../context/UserContext';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateAuth = ({children}) => {
    let location =useLocation()
   const {user,loading} =useContext(AuthContext)
    if(loading){
        return <div>Loading...</div>
    }
    if(user && user.email){
        return children
    }
  

    return <Navigate to='/login' state={{from:location}} replace></Navigate>
};

export default PrivateAuth;