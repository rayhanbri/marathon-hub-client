import React, { useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword,GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../../firebase/firebaseInit';


const AuthProvider = ({children}) => {
    const [loading,setLoading] = useState(true);

    const createUser =(email,password) => {
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const provider = new GoogleAuthProvider;

    const  userWithGoogle =() => {
        return signInWithPopup(auth,provider)
    } 

     const authInfo = {
       createUser,
       setLoading,
       userWithGoogle
     }
    return (
        <AuthContext value={authInfo}>
                {children}
        </AuthContext>
    );
};

export default AuthProvider;