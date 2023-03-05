import { Route, Routes } from "react-router-dom";
import PrivateRouter from "./router/PrivateRouter";
import About from "./pages/about/About";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import { useState } from "react";
import Details from "./pages/details/Details";
import Navbar from "./components/navbar/Navbar";
import { GlobalStyles } from "./components//GlobalStyles";
import { ThemeProvider } from "styled-components";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const styles = {
    colors: {
      primary: "#00ADB5",
      secondary: "#E1F0DD",
      tertiary: "#0F3945"
    },
    breakpoints: { xs: "360px", sm: "500px", md: "700px" },
  }

  return (
    <div className="App">
      <ThemeProvider theme={styles}>
        <GlobalStyles />
        {isLoggedIn && <Navbar setIsLoggedIn={setIsLoggedIn} />}
        <Routes>
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />}
          />

          <Route path="/" element={<PrivateRouter isLoggedIn={isLoggedIn} />}>
            <Route path="" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="details" element={<Details />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
