import React from "react";
import AuthContextProvider from "./context/AuthContext";
import AppRouter from "./router/AppRouter";
import { ToastContainer, toast } from 'react-toastify';


const App = () => {
  return (
    <div>
      <AuthContextProvider>
        <AppRouter />
        <ToastContainer />
      </AuthContextProvider>
    </div>
  );
};

export default App;
