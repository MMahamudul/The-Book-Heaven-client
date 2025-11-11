
import { useState } from 'react';
import { createContext } from 'react';
import { app } from './../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { GoogleAuthProvider } from "firebase/auth";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
   const  [user, setUser] = useState(null);
   const  [loading, setLoading] = useState(true);
   const createUser = (email, password) =>{

    return createUserWithEmailAndPassword(auth, email, password);

   }
   const logOut = () =>{
        return signOut(auth)
        .then(() => {
        toast.success('You Sign Out Successfully');
        
      })
    .then(error=>toast.error(error.message))

    }

   const logIn = (email, password) =>{
    return signInWithEmailAndPassword(auth, email, password)
   }
   
   const googleSignIn = ()=>{
    return signInWithPopup(auth, googleProvider)
   }
const updateUser = (updateData) =>{

    return updateProfile(auth.currentUser, updateData);

}
     


useEffect(()=>{
    const observer = onAuthStateChanged(auth, (currentUser)=>{
        setUser(currentUser);

    })
    return () =>{
        observer();
    }

   },
    [])

    const authData = {
        user,
        setUser,
        createUser,
        logOut,
        logIn,
        googleSignIn,
        updateUser,
        loading,
        setLoading,
    }

  

    return <AuthContext value={authData}>
        {children}
    </AuthContext>
};

export default AuthProvider;