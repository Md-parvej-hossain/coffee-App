import { createContext, useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { auth } from './firebase.config';
// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  console.log(user);
  //socal provider
  const provider = new GoogleAuthProvider();
  //create user
  const creatNewUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //log in user
  const logInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  //google provider
  const googleLogin = () => {
    return signInWithPopup(auth, provider);
  };
  //sign out
  const signOutUser = () => {
    return signOut(auth);
  };

  const authData = {
    creatNewUser,
    logInUser,
    googleLogin,
    signOutUser,
    user,
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
