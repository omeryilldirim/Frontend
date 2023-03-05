import { Route, Routes} from "react-router-dom";
import PrivateRouter from "./router/PrivateRouter";
import About from "./pages/about/About";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import { useState } from "react";
import Details from "./pages/details/Details";
import Navbar from "./components/navbar/Navbar";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)


  return (
    <div className="App">
      {isLoggedIn && <Navbar setIsLoggedIn={setIsLoggedIn}/>}
      <Routes>
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>} />

        <Route path="/" element={<PrivateRouter isLoggedIn={isLoggedIn} />}>
          <Route path="" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="details" element={<Details />} />
        </Route>

      </Routes>
    </div>
  );
}

export default App;