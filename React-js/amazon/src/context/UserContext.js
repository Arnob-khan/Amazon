import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import App from '../App';
import app from '../firebase/firebase.config';
export const AuthContext =createContext()
const auth =getAuth(app)
const UserContext = ({children}) => {
    const [user,setUser]=useState({})
    const[loading,setLoading]=useState(true)

    const createUser=(email,password)=>{
        setLoading(true)

        return createUserWithEmailAndPassword(auth,email,password)
    }

    const login =(email,password)=>{
         setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut=()=>{
        setLoading(true)

       return signOut(auth)
    }

    useEffect(()=>{
       const unSubscirbe= onAuthStateChanged(auth,currentUser=>{
            
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>{
            unSubscirbe();
        }
    },[])

    const authInfo={user,createUser,login,logOut,loading}
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                 {children}
            </AuthContext.Provider>
        </div>
    );
};

export default UserContext;