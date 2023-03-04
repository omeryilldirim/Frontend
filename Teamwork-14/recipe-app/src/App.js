import { Route, Routes} from "react-router-dom";
import PrivateRouter from "./router/PrivateRouter";
import About from "./pages/about/About";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/" element={<PrivateRouter />}>
          <Route path="" element={<Home />} />
        </Route>

      </Routes>


      {/* <Login />
      <Home />
      <About /> */}
    </div>
  );
}

export default App;