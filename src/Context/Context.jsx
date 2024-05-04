import React, { createContext, useEffect, useState } from 'react';
import { app } from '../Firebase/firebase.init';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth"
const auth = getAuth(app)
export const MyContext = createContext()


const Context = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loader, setLoader] = useState(true)

    const createNewUser = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const LogIn = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const LogOut = () => {
        setLoader(true)
        return signOut(auth)
    }

    const updateUserProfile = (profile) => {
        setLoader(true)

        return updateProfile(auth.currentUser, profile)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser === null || currentUser.emailVerified) {
                setUser(currentUser)
            }
            setUser(currentUser)
            setLoader(false)
        })

        return () => {
            unsubscribe()
        }
    })

    const authInfo = { user, loader, createNewUser, LogIn, LogOut, updateUserProfile }
    return (
        <MyContext.Provider value={authInfo}>
            {children}
        </MyContext.Provider>
    );
};

export default Context;