import React from 'react'
import NavbarApp from '../layout/NavbarApp'
import FooterApp from '../layout/FooterApp'
import Home from '../pages/Home';
import { Routes,
        Route
        } from "react-router-dom";
import DetailPage from '../pages/DetailPage';

   


const MoviesRouter = () => {
  return (
    <div className='bg-slate-900 min-h-screen'>
    <NavbarApp/>
        <Routes>
            <Route path = "/home" element={<Home/>}/>
            <Route path = "/search"/>
            <Route path = "/movies"/>
            <Route path = "/detail/:id" element={<DetailPage/>}/>
        </Routes>
    <FooterApp/>
    </div>
  )
}



export default MoviesRouter