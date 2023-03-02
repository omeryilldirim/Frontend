import Footer from "./components/Footer"
import Nav from "./components/Nav"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import People from "./pages/People"
import PersonDetail from "./pages/PersonDetail"
import NotFound from "./pages/NotFound"
import { Routes, Route } from "react-router-dom"
import Paths from "./pages/Paths"
import FullStack from "./pages/Fullstack"
import Aws from "./pages/Aws"
import ReactJS from "./pages/ReactJS"
import PrivateRouter from "./pages/PrivateRouter"
import Login from "./pages/Login"

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/people" element={<People />} />
        <Route path="/people/:id" element={<PersonDetail />} />
        
        <Route path="/paths" element={<Paths />} >
          <Route path="fullstack" element={<FullStack/>}>
            <Route path="react" element={<ReactJS/>}/>
          </Route>
          <Route path="" element={<Aws/>} />
        </Route>

        <Route path="/contact" element={<PrivateRouter />}>
          <Route path="" element={<Contact />} />
        </Route>

        <Route path="/login" element={<Login />} />

        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
