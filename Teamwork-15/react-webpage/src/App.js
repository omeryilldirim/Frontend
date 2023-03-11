import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './pages/About';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Services from './pages/Services';

function App() {
  return (
    <BrowserRouter>

      <Header />

      <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='*' element={<NotFound/>}/>

      </Routes>

      <Footer/>

    </BrowserRouter>

  );
}

export default App;
