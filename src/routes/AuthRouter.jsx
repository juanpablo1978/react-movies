import React from 'react'
import LoginPage from '../pages/LoginPage'
import { Routes,
    Route
    } from "react-router-dom";


const AuthRouter = () => {
  return (
    <>
    <Routes>
        <Route path='login' element = {<LoginPage/>}/>
        <Route path='*' element = {<LoginPage/>}/>
    </Routes>
    </>
  )
}



export default AuthRouter