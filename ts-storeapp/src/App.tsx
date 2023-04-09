import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Navbar from "./components/Navbar";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { ToastContainer, Zoom } from "react-toastify";

function App() {
  return (
    <div className="bg-slate-300 min-h-screen">
      <Provider store={store}>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/favorites" element={<Favorites/>} />
      </Routes>
      </BrowserRouter>
      </Provider>
      <ToastContainer transition={Zoom}/>
    </div>
  );
}

export default App;
