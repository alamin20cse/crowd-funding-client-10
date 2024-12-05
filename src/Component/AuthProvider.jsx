import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from './firebase.init';


export const AuthContex=createContext();

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setaloading]=useState(null);

    const createNewUser=(email,password)=>{
        setaloading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }








    const authInfo={
        user,
        setUser,
        loading,
        createNewUser,

        


    }


    useEffect(()=>{
        const unsubscribe=  onAuthStateChanged(auth,currentuser=>{
              setUser(currentuser);
              setaloading(false);
  
  
          });
          return ()=>{
              unsubscribe();
  
          }
         
  
  
      },[])
  




    return (
        <AuthContex.Provider value={authInfo}>
            {children}
            
        </AuthContex.Provider>
    );
};

export default AuthProvider;