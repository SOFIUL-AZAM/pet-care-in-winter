import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../Firebase/Firebase.config.js";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({children}) =>{
    const [user,setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const loginUser = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    };

    const createUser = (email,password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    };

    const googleLogin = () =>{
        setLoading(true);
        return signInWithPopup(auth,googleProvider);
    };


    const logoutUser = () =>{
        setLoading(true);
        return signOut(auth);
    };

    const updateUserProfile = (name,photoURL) =>{
        return updateProfile(auth.currentUser,{
            displayName: name,
            photoURL: photoURL,
        })
    }

    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser) =>{
            setUser(currentUser);
            setLoading(false);

        }) ;
        return () => unsubscribe();
    },[])

    return (
    <AuthContext.Provider value={{
        user,
        loading,
        logoutUser,
        loginUser,
        createUser,
        googleLogin,
        updateUserProfile,
        auth,
        
    }}>{children}</AuthContext.Provider>
);
};

export default AuthProvider;

