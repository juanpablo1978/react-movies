import React from 'react'
import AuthRouter from './AuthRouter'
import PrivateRoute from './PrivateRoute'
import MoviesRouter from './MoviesRouter';
import {BrowserRouter,
    Routes,
    Route
    } from "react-router-dom";




const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route exact path="auth/*" element={<AuthRouter/>}/>
            <Route path='/*' element={
                <PrivateRoute>
                    <MoviesRouter/>
                </PrivateRoute>
            }/>
        </Routes>
    </BrowserRouter>
  )
}



export default AppRouter