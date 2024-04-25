import React, { createContext, useEffect, useState } from 'react';
import { app } from '../Firebase/firebase.init';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth"
const auth = getAuth(app)
export const MyContext = createContext()


const Context = ({ children }) => {
    const [user , setUser] = useState(null)

    const createNewUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const LogIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const LogOut = ()=>{
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })

        return () => {
            unsubscribe()
        }
    })

    const authInfo = { user , createNewUser , LogIn, LogOut}
    return (
        <MyContext.Provider value={authInfo}>
            {children }
        </MyContext.Provider>
    );
};

export default Context;