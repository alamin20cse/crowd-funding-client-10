import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { createContext, useState } from 'react';


export const AuthContex=createContext();

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setaloading]=useState(null);

    const createNewUser=(email,password)=>{
        setaloading(true);
        return createUserWithEmailAndPassword(email,password);
    }








    const authInfo={
        user,
        setUser,
        loading,
        createNewUser,

        


    }




    return (
        <AuthContex.Provider value={authInfo}>
            {children}
            
        </AuthContex.Provider>
    );
};

export default AuthProvider;