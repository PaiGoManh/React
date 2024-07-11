import React from 'react'
import Login from './pages/Login'
import Registration from './pages/Registration'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom"
import AuthLayout from './Layout/AuthLayout'
import MainLayout from './Layout/MainLayout'
import Home from './pages/Home'
import AddRecipe from './pages/AddRecipe'

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
            <Route path='/' element={<AuthLayout/>}>
                <Route index element={<Login/>}/>
                <Route path='/signup' element={<Registration/>}/>
            </Route> 

            <Route path='/' element={<MainLayout/>}>
                <Route path='/home' element={<Home/>}/>
                <Route path='/addRecipe' element={<AddRecipe/>}/>
            </Route>
      </>


    )

  )
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App