import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../Firebase/Firebase.config.js";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) =>{
    const [user,setUser] = useState(true);

    const loginUser = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password);
    };

    const createUser = (email,password) => {
        return createUserWithEmailAndPassword(auth,email,password);
    };


    const logoutUser = () =>{
        return signOut(auth);
    };

    useEffect(() =>{
        const unsubcribe = onAuthStateChanged(auth,(currentUser) =>{
            setUser(currentUser);

        }) ;
        return () => unsubcribe();
    },[])

    return (
    <AuthContext.Provider value={{
        user,
        logoutUser,
        loginUser,
        createUser,
        auth,
        
    }}>{children}</AuthContext.Provider>
);
};

export default AuthProvider;

