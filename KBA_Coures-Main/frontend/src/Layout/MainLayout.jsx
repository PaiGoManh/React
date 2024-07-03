import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Homepage from '../pages/Homepage'
import CoursePage from '../pages/CoursePage'
import Notfound from '../pages/Notfound'
import Contact from '../pages/Contact'
import AddCourses from '../pages/AddCourses'
import EditCoursePage from '../pages/EditCoursePage'
import ViewCourses from '../pages/viewCourses'


const Main = () => {
  return (
    <>
        
        <Route path='/home' element={<Homepage/>}/>
        <Route path='/courses' element={<CoursePage/>}/>
        <Route path='/*' element={<Notfound/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/add_course' element={<AddCourses/>}/>
        <Route path='/edit_course/:id' element={<EditCoursePage/>} loader={fetchCourse}/>
        <Route path='/courses/:id' element={<ViewCourses/>} loader={fetchCourse}/>
      
    </>
  )
}

export default Main