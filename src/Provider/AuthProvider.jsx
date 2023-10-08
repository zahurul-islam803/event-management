import PropTypes from "prop-types";
import { getAuth, createUserWithEmailAndPassword, updateProfile, onAuthStateChanged, signOut, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../../src/FirebaseConfig/Firebase.config";
import { createContext, useEffect, useState } from "react";
export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
const [user, setUser] = useState(null);
const [loading, setLoading] = useState(true);
// user create
const createUser = (email, password) =>{
  setLoading(true);
  return createUserWithEmailAndPassword(auth, email, password);
}
// google login
const googleLogin = () =>{
  setLoading(true);
  return signInWithPopup(auth, googleProvider);
}
// update profile
const handleUpdateProfile = (name, img) => {
  return updateProfile(auth.currentUser,{
    displayName: name, photoURL: img
  })
}


// log out
const logOut = () =>{
  return signOut(auth);
}
// Sign In
const signIn = (email, password) => {
  setLoading(true)
  return signInWithEmailAndPassword(auth, email, password);
}

useEffect(()=>{
  const unSubscribe = onAuthStateChanged(auth, currentUser =>{
    setUser(currentUser);
    setLoading(false);
  })
  return () =>{
    unSubscribe();
  }
},[])


  const authInfo = {
    user,
    loading,
    createUser,
    handleUpdateProfile,
    logOut,
    signIn,
    googleLogin,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};
export default AuthProvider;
