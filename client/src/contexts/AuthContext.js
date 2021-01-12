import React, {useContext, useState, useEffect} from 'react';
import { auth } from '../firebase/firebase'

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext)
}
//by default no user in usestate, set up current user so we know the current user
export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)

    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password)
    }

    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password)
    }

    function logout() {
        return auth.signOut()
    }

    function resetPassword(email) {
        return auth.sendPasswordResetEmail(email)
    }
//will return a promise so we know if the user signs in successfully, and eror message if theres a failure
//or redirect user well be linking the signup component

    //we useEffect because we only want it to run once
    //we want to unsubscribe wheneber were done, 
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user =>{
            setCurrentUser(user)
            setLoading(false)
        })
        return unsubscribe
    }, [])
    //firebase has initial loading state we need to take care of
    // return unsubscirbes us from listener once the component mounts
    //firebase's way of notifying us when the user is set change and a user is present in our app
    //allows us to set current user from function signup (user or null)
    //whenever we call createuserwithemail and password it will call set current user and set user
    //we want authonstatechanged in a use effect because we only want to run it when we mount our component
    const value = {
        currentUser,
        login,
        signup, 
        logout,
        resetPassword
    }
    //in order to usecontext we pass in signup
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
//if were not loading then render children, otherwise we dont render children
//we dont render any of our app until we have currentuser set for the first time
//we have access to usecontext thru useauth hook and we have auth provider that returns a value
//that has all the info we want to provide in our authentication
//context is for passing down props into children without having to pass props into each component (global state
//we want our app to know that the user is logged in or out anywhere in the app

// if we do not want to use firebase we just change this function for login and sign up
//        return auth.signInWithEmailAndPassword(email, password)
//        return auth.createUserWithEmailAndPassword(email, password)

