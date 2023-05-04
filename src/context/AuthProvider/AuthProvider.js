import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import app from '../../firebase/firebase.config';


export const AuthContex = createContext();
const auth = getAuth(app)



const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider);
    }
    const githubSignIn = () => {
        return signInWithPopup(auth, githubProvider)
    }

    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }



    const logOut = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser)
            setUser(currentUser);
            setLoading(false)
        });
        return () => {
            unsubscribe();
        }
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        googleSignIn,
        githubSignIn,
        updateUserProfile,
        logOut
    }


    return (
        <AuthContex.Provider value={authInfo}>
            {children}
        </AuthContex.Provider>
    )
};

export default AuthProvider;

