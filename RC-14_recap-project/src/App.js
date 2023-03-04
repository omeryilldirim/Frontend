import { Routes, BrowserRouter, Route } from "react-router-dom";
import Main from "./pages/Main";
import NewProduct from "./pages/NewProduct";
import ProductList from "./pages/ProductList";
import About from "./pages/About";
import UpdateProduct from "./pages/UpdateProduct";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="bg-light app">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />}/>
          <Route path="/new-product" element={<NewProduct />}/>
          <Route path="/product-list" element={<ProductList />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/update-product" element={<UpdateProduct />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
