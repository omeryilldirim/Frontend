import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../auth/firebase";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";

// export const {Provider} = createContext()
export const AuthContext = createContext();
//* with custom hook
// export const useAuthContext = () => {
//     return useContext(AuthContext);
//   };

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState("")
  const navigate = useNavigate()

    useEffect(() => {
      userObserver()
    }, [])
    
  const createUser = async (email, password, displayName) => {
    try {
      //? yeni bir kullanıcı oluşturmak için kullanılan firebase metodu
      await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(auth.currentUser, {displayName:displayName})
      navigate("/")
      toastSuccessNotify("Registered successfully!")
    } catch (error) {
      toastErrorNotify(error.message)
    }
  };

  //* https://console.firebase.google.com/
  //* => Authentication => sign-in-method => enable Email/password
  const signIn = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/")
      toastSuccessNotify("Logged in successfully!")

    } catch (error) {
      toastErrorNotify(error.message)
    }
  };

  const logOut = () => {
    signOut(auth);
    toastSuccessNotify("Logged out successfully!")
  };

  const userObserver = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const {email,displayName,photoURL}= user
        setCurrentUser({email,displayName,photoURL})
      } else {
        setCurrentUser(false)
      }
    });
  }

  //* https://console.firebase.google.com/
  //* => Authentication => sign-in-method => enable Google
  //! Google ile girişi enable yap
  //* => Authentication => settings => Authorized domains => add domain
  //! Projeyi deploy ettikten sonra google sign-in çalışması için domain listesine deploy linkini ekle
  const signUpProvider = () => {
    //? Google ile giriş yapılması için kullanılan firebase metodu
    const provider = new GoogleAuthProvider();
    //? Açılır pencere ile giriş yapılması için kullanılan firebase metodu
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        navigate("/");
        toastSuccessNotify("Logged in successfully!");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const values = { createUser, signIn, logOut, signUpProvider,currentUser };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;