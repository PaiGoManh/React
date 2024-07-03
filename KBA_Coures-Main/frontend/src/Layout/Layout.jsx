import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import SignupPage from '../pages/SignUpPage'
import LoginPage from '../pages/LoginPage'


const Layout = () => {
  return (
    <>
    <SignupPage/>
    <LoginPage/>
    <Outlet/>
   </>
  )
}

export default MainLayout