import PropTypes from "prop-types";
import { getAuth, createUserWithEmailAndPassword, updateProfile, onAuthStateChanged } from "firebase/auth";
import app from "../../src/FirebaseConfig/Firebase.config";
import { createContext, useEffect, useState } from "react";
export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
const [user, setUser] = useState(null);
const [loading, setLoading] = useState(true);

const createUser = (email, password) =>{
  setLoading(true);
  return createUserWithEmailAndPassword(auth, email, password);
}
// update profile
const handleUpdateProfile = (name, img) => {
  return updateProfile(auth.currentUser,{
    displayName: name, photoURL: img
  })
}

useEffect(()=>{
  const unSubscribe = onAuthStateChanged(auth, currentUser =>{
    setUser(currentUser);
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
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};
export default AuthProvider;
