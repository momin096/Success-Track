import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.init";

export const AuthContext = createContext();

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();



const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    // console.log(user);

    

    const createNewUserWithEmail = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    
    const signInWIthEmail = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    
    const singOut = () => {
        setLoading(true);
        return signOut(auth);
    }
    const createNewUserWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }
    
    const updateUserProfile = (updatedData) => {
        setLoading(true)
        return updateProfile(auth.currentUser, updatedData);
    }

    const forgetPassword = (email) =>{
        setLoading(true);
        return sendPasswordResetEmail(auth,email);
    }
    

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            unSubscribe();
        }
    }, [])

    const authInfo = {
        user,
        setUser,
        createNewUserWithEmail,
        signInWIthEmail,
        singOut,
        createNewUserWithGoogle,
        updateUserProfile,
        loading,
        forgetPassword,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;