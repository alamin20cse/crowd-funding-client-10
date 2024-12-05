import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile,  } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from './firebase.init';


export const AuthContex=createContext();

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setloading]=useState(null);

    const createNewUser=(email,password)=>{
        setloading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    


    // update profile

    const updateUserProfile = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData); 
        
      };

    // login
    const userLogin=(email,password)=>{
        setloading(true);
        return signInWithEmailAndPassword(auth,email,password);
      
    }


    // logout
    
    const logOut=()=>{
        setloading (true);
        return signOut(auth);
        

    }




      
    








    const authInfo={
        user,
        setUser,
        loading,
        createNewUser,
        updateUserProfile,
        logOut,
        userLogin,

        


    }


    useEffect(()=>{
        const unsubscribe=  onAuthStateChanged(auth,currentuser=>{
              setUser(currentuser);
              setloading(false);
  
  
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