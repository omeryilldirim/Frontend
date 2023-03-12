import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from '../components/Navbar'
import Login from '../pages/Login'
import Main from '../pages/Main'
import MovieDetail from '../pages/MovieDetail'
import Register from '../pages/Register'
import PrivateRouter from './PrivateRouter'

const AppRouter = () => {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path='/' element={<Main />}/>
            <Route path='/' element={<Register />}/>
            <Route path='/' element={<Login />}/>

            <Route path='' element={<PrivateRouter />}>
                <Route path="/detail" element={<MovieDetail />} />
            </Route>

            
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter