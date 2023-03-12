import { createContext, useContext, useState } from "react";
// import {
//   createUserWithEmailAndPassword,
//   onAuthStateChanged,
//   signOut,
//   signInWithEmailAndPassword,
// } from "firebase/auth";
// import { auth } from "../firebase-config";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");

  const values = {user,setUser,};

  // onAuthStateChanged(auth, (currentUser)=>{
  //   setUser(currentUser)
  // } )

//   const register = async () => {
//     try {
//       const user = await createUserWithEmailAndPassword(
//         auth,
//         registerEmail,
//         registerPassword
//       );
//       setUser(user);
//       console.log(user);
//     } catch (error) {
//       alert(error.message);
//     }
//   };

//   const login = async () => {
//     try {
//       const user = await signInWithEmailAndPassword(
//         auth,
//         loginEmail,
//         loginPassword
//       );
//       setUser(user);
//     } catch (error) {
//       alert(error.message);
//     }
//   };

//   const logout = async () => {
//     await signOut(auth);
//     setUser();
//   };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export default AuthProvider;
